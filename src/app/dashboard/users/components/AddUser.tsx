import { Input } from "@/sharedComponents/Input/Input"
import styles from "../../styles/user.module.scss"
import { Typography } from "@/sharedComponents/Typography/Typography"
import { Button } from "@/sharedComponents/Button/Button"
import { type } from "os"

type Props = {
    showOverlay: boolean
    handleCloseForm: () => void
}

export const AddUser = ({showOverlay, handleCloseForm}:Props) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.userForm}>
                <Button onClick={handleCloseForm} className={styles.closeBtn}>X</Button>
                <div>
                    <Typography variant={2} className={styles.title}>
                        Add User
                    </Typography>

                    <form>
                        <Input className={styles.input} type="text" placeholder="username" />
                        <Input className={styles.input}  type="email" placeholder="email" />
                        <Input className={styles.input}  type="password" placeholder="password" />

                        <Button className={styles.button}>
                            Add User
                        </Button>
                    </form>
                </div>
            </div>

        </div>
    )
}