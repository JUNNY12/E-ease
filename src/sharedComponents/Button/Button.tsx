
type ButtonProps = {
    children: React.ReactNode;
    onClick?:() => void;
    title?: string;
    className?: string;
    disabled?: boolean;
};

export const Button = ({ children, onClick, title, className, disabled }: ButtonProps) => {
    
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            title={title}
            className={className}
        >
            {children}
        </button>
    );
};
