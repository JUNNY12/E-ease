import Form from "../../components/Form";
import { Typography } from "@/sharedComponents/Typography/Typography";
import styles from "../../../styles/form.module.scss"
export default function Container() {
    return (
        <div className={styles.container}>
            <Typography variant={1}>
                Add new product 
            </Typography>
            <Form mode="add"/>
        </div>
    )
}