const base_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

interface ResetData{
    userId: string | undefined |null;
    password: string | undefined | null;
    token: string | undefined | null;
}

export const resetPassword = async (data:ResetData) =>{
    const url = `${base_URL}/resetPassword`;

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