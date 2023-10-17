// import { AuthOptions } from "@/lib/api/auth/auth";
// import { NextResponse } from "next/server";

// export default async function GET (){
//     const url = process.env.NEXT_PUBLIC_EXTERNAL_API_URL + "/logout";

//     const response = await fetch(url, {
//         method: "GET",
//         credentials: "include",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//    if (response.ok) {
//         if (AuthOptions && AuthOptions.callbacks && AuthOptions.callbacks.redirect) {
//             await AuthOptions.callbacks.redirect({ url: "/auth/login" , baseUrl:'http://localhost:3000' });
//         }
//     } else {
//         return NextResponse.json({ error: "Logout failed" }, { status: 500 });
//     }


// }