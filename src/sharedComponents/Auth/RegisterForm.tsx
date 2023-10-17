"use client"
import { Input } from "../Input/Input"
import { Typography } from "../Typography/Typography"
import { Button } from "../Button/Button"
import Logo from "../Logo/Logo"
import styles from './auth.module.scss'
import Link from "next/link"
import { FormEvent } from "react"
import { IState } from "@/reducer/form/formReducer"
import { useAuthForm } from "@/hooks/form/useAuthForm"
import { registerUser } from "@/lib/api/auth/register"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function RegisterForm() {

    const initialState: IState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordError: '',
        passwordStrength: undefined,
    }

    const { state, handleInputChange, resetForm } = useAuthForm(initialState)
    const canSubmit = state.username &&
        state.email &&
        state.passwordError === '' &&
        state.passwordStrength === 'strong' &&
        state.password &&
        state.confirmPassword


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { responseData, errorMessage } = await registerUser({
            username: state.username,
            email: state.email,
            password: state.password,
        })

        console.log(responseData, errorMessage)

        if (responseData) {
            toast.success('Registration successful',
                {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            resetForm()
        }

        if (errorMessage) {
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }


    return (
        <div className={styles.formContainer}>
            <div>
                <Logo />
            </div>
            <Typography variant={1}>
                Create an Account
            </Typography>

            <form onSubmit={handleSubmit}>
                <Input
                    className={styles.input}
                    name='username'
                    placeholder="Enter your username"
                    type="text"
                    value={state.username}
                    onChange={handleInputChange}
                />

                <Input
                    className={styles.input}
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={state.email}
                    onChange={handleInputChange}
                />

                <Input
                    className={styles.input}
                    name="password"
                    placeholder="Enter your password"
                    type='password'
                    value={state.password}
                    onChange={handleInputChange}
                />
                {
                    state.passwordStrength &&
                    <div className={styles.poor}>
                        {state.passwordStrength && state.passwordStrength === 'poor' && <span>Password strength is poor</span>}
                    </div>
                }
                {
                    state.passwordStrength &&
                    <div className={styles.weak}>
                        {state.passwordStrength && state.passwordStrength === 'weak' && <span>Password strength is weak</span>}
                    </div>
                }
                {
                    state.passwordStrength &&
                    <div className={styles.good}>
                        {state.passwordStrength && state.passwordStrength === 'good' && <span>Password strength is good</span>}
                    </div>
                }
                {
                    state.passwordStrength &&
                    <div className={styles.strong}>
                        {state.passwordStrength && state.passwordStrength === 'strong' && <span>Password strength is strong</span>}
                    </div>
                }
                {
                    state.passwordStrength &&
                    <div className={styles.excellent}>
                        {state.passwordStrength && state.passwordStrength === 'excellent' && <span>Password strength is Excellent</span>}
                    </div>
                }

                <Input
                    className={styles.input}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    type='password'
                    value={state.confirmPassword}
                    onChange={handleInputChange}
                />
                <div className={styles.passwordError}>
                    {state.passwordError && <span>{state.passwordError}</span>}
                </div>

                <Button
                    disabled={!canSubmit}
                    className={canSubmit ? styles.button : styles.disabled}>Register</Button>
            </form>

            <p>
                Already have an account? <Link href="/auth/login">Log In</Link>
            </p>

        </div>
    )
}