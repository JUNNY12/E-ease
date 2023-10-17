const base_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

interface RegisterData {
    email: string | undefined;
    password: string;
    username: string;
}
export const registerUser = async (data: RegisterData) => {
    const url = `${base_URL}/register`;
    let responseData;
    let errorMessage;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            errorMessage = await response.json();
            throw new Error(errorMessage.message);
        }

        responseData = await response.json();
    } catch (error:any) {
        errorMessage = error.message; 
    }

    return { responseData, errorMessage };
};
