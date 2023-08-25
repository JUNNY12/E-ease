
interface TypographyProps {
    children: React.ReactNode;
    className?: any;
    title?: string;
    variant: 1 | 2 | 3 | 4 | 5 | 6;
    onClick?: () => void;
}

export const Typography = ({
    children,
    className,
    title,
    variant,
    onClick,
}: TypographyProps) => {
    const Tag = `h${variant}` as keyof React.JSX.IntrinsicElements;

    return (
        <Tag
            title={title}
            onClick={onClick}
            className={className}
        >
            {children}
        </Tag>
    );
};