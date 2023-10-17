import { DashboardToggleProvider } from "@/context/toggle/DashboardToggleContext"
type ChildrenProps = {
    children: React.ReactNode
}

export function DashboardProvider({ children }: ChildrenProps) {
    return (
        <>
            <DashboardToggleProvider>
                {children}
            </DashboardToggleProvider>
        </>
    )
}