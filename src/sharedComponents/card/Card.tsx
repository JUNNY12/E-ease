type CardProps = {
    title?: string,
    description?: string,
    image?: string,
    children?:React.ReactNode
    className?:string
    link?: any
    price?:number
}


export const Card = ({children, className }: CardProps) => {
    return (
        <article className={className}>
            {children}
        </article>
    )
}