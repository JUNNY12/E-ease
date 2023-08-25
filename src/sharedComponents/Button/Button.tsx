import styles from './button.module.scss';

type ButtonProps = {
    children: string;
    onClick?: () => void;
    title?: string;
    className?: string;
};

export const Button = ({ children, onClick, title, className }: ButtonProps) => {
    
    return (
        <button
            onClick={onClick}
            title={title}
            className={className}
        >
            {children}
        </button>
    );
};
