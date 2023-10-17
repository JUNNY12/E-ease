import styles from "../styles/dashboard.module.scss"

type CardProps = {
    children: React.ReactNode;
    className?: string;
    props?: any;

}


export const Card = ({ children, className, ...props }:CardProps) => {
    return (
        <div className={`${styles.card} ${className}`} {...props}>
            {children}
        </div>
    );
};