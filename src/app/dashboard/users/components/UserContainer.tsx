"use client";
import { Button } from "@/sharedComponents/Button/Button"
import styles from "../../styles/user.module.scss"
import UserItem from "./UserItem"
import { Input } from "@/sharedComponents/Input/Input"
import { AddUser } from "./AddUser"
import { useShowForm } from "@/hooks/admin/useShowForm"


const users = [
    {
        userId: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "admin",
        createdAt: "2021-09-01",
        signedIn: "2021-09-01",
    },
    {
        userId: 2,
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "admin",
        createdAt: "2021-09-01",
        signedIn: "2021-09-01",
    },
    {
        userId: 3,
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "admin",
        createdAt: "2021-09-01",
        signedIn: "2021-09-01",
    },
    {
        userId: 4,
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "admin",
        createdAt: "2021-09-01",
        signedIn: "2021-09-01",
    },
    {
        userId: 5,
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "admin",
        createdAt: "2021-09-01",
        signedIn: "2021-09-01",
    },
    {
        userId: 6,
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "admin",
        createdAt: "2021-09-01",
        signedIn: "2021-09-01",
    }

]

export default function UserContainer() {

    const {showForm, showOverlay , handleCloseForm ,handleShowForm} = useShowForm()

    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.searchHeader}>
                    <div>
                        <Input
                            className={styles.input}
                            placeholder="Search email address, username or userId"
                            type="search"
                        />
                    </div>

                    <div>
                        <Button title="Add user" onClick={handleShowForm} className={styles.button}>Add User</Button>
                    </div>

                    <div>
                        {
                            showForm && <AddUser 
                            showOverlay={showOverlay}
                            handleCloseForm={handleCloseForm} />
                        }
                    </div>

                </div>
                <div className={styles.flexWrapper}>
                    <div className={styles.flexHeader}>
                        <div className={styles.col_1}>S/N</div>
                        <div className={styles.col_2}>Email</div>
                        <div className={styles.col_3}>Created</div>
                        <div className={styles.col_4}>Signed In</div>
                        <div className={styles.col_5}>Role</div>
                        <div className={styles.col_6}>Assign Role</div>
                        <div className={styles.col_7}>Action</div>
                    </div>

                    <div>
                        {
                            users.slice(0, 10).map((user, index) => {
                                return (
                                    <UserItem key={user.userId} user={user} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}