import { DashboardProvider } from "@/provider/DashboardProvider"
import { DashboardGeneralLayout } from "./components/DashboardLayout"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardProvider>
            <DashboardGeneralLayout>
                {children}
            </DashboardGeneralLayout>
        </DashboardProvider>
    )
}