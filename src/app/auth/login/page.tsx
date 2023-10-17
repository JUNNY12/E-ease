import LoginForm from "@/sharedComponents/Auth/LoginForm"
import styles from "../styles/authPage.module.scss"

export default function Login() {
    return (
        <div className={styles.formContainer}> 
            <LoginForm />
        </div>
    )
}