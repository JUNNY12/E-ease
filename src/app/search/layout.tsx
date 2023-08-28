import GridWrapper from "./components/GridWrapper"

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <GridWrapper>
            {children}
        </GridWrapper>
    )
}