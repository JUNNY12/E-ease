import { AuthOptions } from "@/lib/api/auth/auth";
import NextAuth from "next-auth";

const handler = NextAuth(AuthOptions);

export { handler as POST, handler as GET}
