const base_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

interface ResetPasswordData {
    email: string | undefined;
}

export const requestResetPassword = async (data:ResetPasswordData) =>{
    const url = `${base_URL}/requestPasswordReset`;

    let responseData;

    try {
        const response =await fetch(url, {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })

        responseData= await response.json()
    }

    catch(error:any){
        throw new Error(error)
    }

    return {responseData}
}