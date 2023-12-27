"use client"
import { Input } from "../Input/Input"
import { Typography } from "../Typography/Typography"
import { Button } from "../Button/Button"
import Logo from "../Logo/Logo"
import styles from './auth.module.scss'
import { useAuthForm } from "@/hooks/form/useAuthForm"
import { FormEvent } from "react"
import { signIn } from "next-auth/react";
import { toast } from "react-toastify"
import { useState } from "react"
import { BeatLoader } from "react-spinners"

const initialState = {
    username: '',
    password: '',
}
export default function ReAuthenticateForm() {
    const { state, handleInputChange, resetForm } = useAuthForm(initialState)
    const [loading, setLoading] = useState(false)
    const canSubmit = state.username && state.password

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            const res = await signIn('credentials', {
                username: state.username,
                password: state.password,
                redirect: false
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
            setLoading(false)
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
            setLoading(false)
        }
    }


    return (
        <div className={styles.overlay}>
            <div className={styles.reauthenticate}>
                <div className={styles.formContainer}>
                    <Typography variant={1}>
                        Re-authenticate to continue
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
                            {
                                loading ? 
                                    <span> LOADING <BeatLoader color='white' size={10} /></span>
                                : 'Login'
                            }
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    )
}