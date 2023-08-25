import { HandleToggleProvider } from "@/context/toggle/HandleToggleHeaderContext"


type ProviderProps = {
    children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
    return (
        <>
            <HandleToggleProvider>
                {children}
            </HandleToggleProvider>
        </>
    )
}