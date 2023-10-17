const base_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

export const logoutUser = async (refreshToken:any) => {
    const url = `${base_URL}/logout`;

    let responseData;
    let errorMessage;

    try {
        const response = await fetch(url, {
            method: "POST",
            credentials: "include", 
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ refreshToken})
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