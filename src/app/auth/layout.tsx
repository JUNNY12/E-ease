import AuthHeader from "./component/Header"



export default function AuthLayout ({
    children
}:{
    children: React.ReactNode
}) {
    return (
        <section >
            <AuthHeader />
            {children}
        </section>
    )
}