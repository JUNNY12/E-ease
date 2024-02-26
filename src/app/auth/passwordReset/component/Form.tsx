"use client"
import styles from '../styles.module.scss';
import { CgLock } from 'react-icons/cg';
import { Typography } from '@/sharedComponents/Typography/Typography';
import { Button } from '@/sharedComponents/Button/Button';
import { useState } from 'react';
import { requestResetPassword } from '@/lib/api/auth/requestResetPassword';
import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { resetPassword } from '@/lib/api/auth/resetPassword';

export default function Form() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [data, setData] = useState({
        password: '',
        confirmPassword: '',
    });

    const { password, confirmPassword } = data;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const mutation = useMutation(requestResetPassword);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordStatus('Passwords do not match')
            return;
        }
        try {
            const { responseData } = await resetPassword({
                userId: searchParams.get('id'),
                token: searchParams.get('token'),
                password: data.password
            });
            console.log(responseData)
            if (responseData.status === 200) {
                setStatus('success');
            }
            else {
                setStatus('error');
            }
            setData({
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.icon}>
                <CgLock />
            </div>
            <Typography className={styles.header} variant={1}>Reset Password</Typography>
            <p
                className={status == 'success' ? styles.success : status === 'error' ? styles.danger : ''}
            >
                {status === 'success' ? 'Password reset successfully' : status === 'error' ? 'Something went wrong! try again later' : ''}
            </p>
            <form onSubmit={handleSubmit}>
                <input type="password" required placeholder='password' value={data.password} name='password' onChange={handleInputChange} />
                <input type="password" required placeholder='confirm password' value={data.confirmPassword} name='confirmPassword' onChange={handleInputChange} />
                {
                    passwordStatus && password !== confirmPassword && <p className={styles.danger}>{passwordStatus}</p>
                }
                <Button className={styles.button}>
                    {mutation.isLoading ? 'Sending...' : 'Reset Password'}
                </Button>
            </form>
        </div>
    )
}
