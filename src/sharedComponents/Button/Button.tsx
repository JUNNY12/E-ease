import styles from './button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
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
