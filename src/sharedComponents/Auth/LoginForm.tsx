"use client"
import { Input } from "../Input/Input"
import { Typography } from "../Typography/Typography"
import { Button } from "../Button/Button"
import styles from './auth.module.scss'
import Link from "next/link"
import { useAuthForm } from "@/hooks/form/useAuthForm"
import { FormEvent } from "react"
import { signIn } from "next-auth/react";
import { toast } from "react-toastify"
import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { BeatLoader } from 'react-spinners'
import { useState } from "react"

const initialState = {
  username: '',
  password: '',
}

export default function LoginForm() {
  const { state, handleInputChange, resetForm } = useAuthForm(initialState)
  const [loading, setLoading] = useState(false)
  const canSubmit = useMemo(() => state.username && state.password, [state.username, state.password])
  const callbackUrl = useSearchParams().get('callbackUrl')
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await signIn('credentials', {
        username: state.username,
        password: state.password,
        redirect: true,
        callbackUrl: callbackUrl ?? '/'
      })

      console.log(res)

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
    <div className={styles.formContainer}>
      <Typography variant={1}>
        Welcome on board
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
              <span>
                Loading <BeatLoader color='#fff' size={8} />
              </span>
              : 'Login'
          }
        </Button>

      </form>

      <p>
        Don't have an account? <Link href="/auth/register">Sign Up</Link>
      </p>
      <p className={styles.forgotPassword}>
        <Link href="/auth/forgotPassword">Forgot Password</Link>
      </p>
    </div>
  )
}