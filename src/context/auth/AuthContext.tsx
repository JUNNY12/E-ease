import { createContext, useState, useEffect, useContext } from "react";
import { useRefreshToken } from "@/hooks/auth/useRefreshToken";
import ReAuthenticateForm from "@/sharedComponents/Auth/ReAuthenticatForm";
import { useSession } from "next-auth/react";
const initialState = {
    errorStatus: '',
}

export const AuthContext = createContext(initialState)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const refreshToken = useRefreshToken();
    const { data: session, status } = useSession();
    const [errorStatus, setErrorStatus] = useState(initialState.errorStatus);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await refreshToken();
                if (error?.response?.status === 403) {
                    setErrorStatus('error');
                    document.body.style.overflow = 'hidden';
                    console.log(error);
                } else {
                    setErrorStatus('success');
                    document.body.style.overflow = 'auto';
                }
            } catch (err) {
                setErrorStatus('error');
                console.error(err);
            }
        };

        fetchData();
    }, [refreshToken]);
    return (
        <AuthContext.Provider value={{ errorStatus }}>
            <>
                {(errorStatus ==='error' && status === 'authenticated') && <ReAuthenticateForm />}
                {children}
            </>
        </AuthContext.Provider>
    )
}