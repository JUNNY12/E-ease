import RegisterForm from "@/sharedComponents/Auth/RegisterForm"
import styles from "../styles/authPage.module.scss"

export default function Register() {
  return (
    <div className={styles.formContainer}> 
      <RegisterForm />
    </div>
  )
}
