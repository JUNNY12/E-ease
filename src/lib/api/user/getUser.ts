const base_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;





export default async function getUser(accessToken:string | null, userId:string | null) {
    const url = `${base_URL}/users/${userId}`;

    let responseData;
    let errorMessage;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            errorMessage = await response.json();
            throw new Error(errorMessage.message);
        }

        responseData = await response.json();
    } catch (error:any) {
        errorMessage = error.message;
    }

    return { responseData, errorMessage}
}