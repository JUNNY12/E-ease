import React from "react"
import styles from "./modal.module.scss"
import { Button } from "../Button/Button"
import { ImCancelCircle } from "react-icons/im"

type ModalProps = {
    children: React.ReactNode,
    isOpen?: boolean,
    onClose?: () => void
    onDelete?: () => void
}

export const Modal = ({
    children,
    isOpen,
    onClose,
    onDelete,
    }: ModalProps): React.JSX.Element | null => {

    if (!isOpen) return null

    return (
        <div className={isOpen ? styles.modalOverlay : ''}>
            <div className={styles.modal} role="dialog">
                <div className={styles.modalContent}>
                    <div className={styles.icon}>
                        <ImCancelCircle />
                    </div>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitle}>Are you sure?</div>
                        <Button className={styles.modalClose} title="Close modal" onClick={onClose}>x</Button>
                    </div>
                    <div className={styles.modalBody}>
                        {children}
                    </div>
                    <div className={styles.modalFooter}>
                        <Button className={styles.deleteButton} title="Delete" onClick={onDelete}>
                            Delete
                        </Button>
                        <Button className={styles.cancelButton} onClick={onClose} title="Cancel">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}