import Form from "../../../components/Form";
import { Typography } from "@/sharedComponents/Typography/Typography";
import styles from "../../../../styles/form.module.scss"

type containerProps = {
    book: Product
}

export default function Container({ book }: containerProps) {
    return (
        <div className={styles.container}>
            <Typography variant={1}>
                Update product
            </Typography>
            <Form mode="edit" initialState={book} />
        </div>
    )
}