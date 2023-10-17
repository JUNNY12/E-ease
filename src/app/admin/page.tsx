"use client"
import Logo from '@/sharedComponents/Logo/Logo'
import { Button } from '@/sharedComponents/Button/Button'
import { Typography } from '@/sharedComponents/Typography/Typography'
import { Input } from '@/sharedComponents/Input/Input'
import styles from './styles/admin.module.scss'
import { useAuthForm } from "@/hooks/form/useAuthForm"
import { FormEvent } from "react"
import { signIn } from "next-auth/react";
import { toast } from "react-toastify"
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

const initialState = {
    username: '',
    password: '',
}

interface IProps {
    searchParams?: { [key: string]: string | string[] | undefined }
}

export default function Admin({ searchParams }: IProps) {
    const { state, handleInputChange, resetForm } = useAuthForm(initialState)
    const router = useRouter()
    const canSubmit = useMemo(() => state.username && state.password, [state.username, state.password])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', {
                username: state.username,
                password: state.password,
                redirect: false,
                callbackUrl: '/'
            })

            if (res?.error === 'CredentialsSignin') {
                toast.error('Authenication failed: Check your username or password', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else if (res?.error === null) {
                resetForm()
                router.push('/dashboard')
                toast.success('Login sucessfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else {
                toast.error('Server error; try again later', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            console.log(res)
        } catch (error) {
            toast.error('An unexpected error occurred', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.error(error)
        }
    }
    if (searchParams?.message) {
        toast.error(searchParams.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    return (
        <section className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <div>
                    <Logo />
                </div>
                <Typography variant={1}>
                    ADMIN LOGIN
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Input
                        name="username"
                        value={state.username}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="Enter your username"
                        type="text" />
                    <Input
                        className={styles.input}
                        placeholder="Enter your password"
                        type='password'
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                    />
                    <Button
                        disabled={!canSubmit}
                        className={canSubmit ? styles.button : styles.disabled}>
                        Log In
                    </Button>

                </form>
            </div>
        </section>
    )
}