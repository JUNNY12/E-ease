"use client"
import styles from '../styles.module.scss';
import { CgDanger } from 'react-icons/cg';
import { IoIosArrowBack } from 'react-icons/io';
import { Typography } from '@/sharedComponents/Typography/Typography';
import { Button } from '@/sharedComponents/Button/Button';
import Link from 'next/link';
import { useState } from 'react';
import { requestResetPassword } from '@/lib/api/auth/requestResetPassword';
import { useMutation } from '@tanstack/react-query';

export default function Form() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('' as 'success' | 'error' | '');
    const mutation = useMutation(requestResetPassword);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { responseData } = await mutation.mutateAsync({ email });
            console.log(responseData)
            if (responseData.status === 200) {
                setStatus('success');
            }
            else {
                setStatus('error');
            }
            setEmail('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.icon}>
                <CgDanger />
            </div>
            <Typography className={styles.header} variant={1}>Forgot Password</Typography>
            <p className={styles.para}>Enter your email and we will send a link to reset your password</p>
            <p
                className={status == 'success' ? styles.success : status === 'error' ? styles.danger : ''}
            >
                {status === 'success' ? 'Reset link sent successfully' : status === 'error' ? 'User not found' : ''}
            </p>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} name='email' onChange={handleInputChange} />
                <Button className={styles.button}>
                    {mutation.isLoading ? 'Sending...' : 'Send reset link'}
                </Button>
            </form>

            <div className={styles.link}>
                <Link href="/auth/login">
                    <span><IoIosArrowBack /></span>
                    <span> Back to login</span>
                </Link>
            </div>
        </div>
    )
}
