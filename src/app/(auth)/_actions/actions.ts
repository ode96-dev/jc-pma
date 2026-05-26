import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
import "dotenv/config";

export const getCurrent = async () => {
    try {
        const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

        const cookieStore = await cookies();
        const session = cookieStore.get(process.env.AUTH_COOKIE!);

        if (!session || !session.value) return null;

        client.setSession(session.value);

        const account = new Account(client);

        return await account.get();
    } catch (error) {
        console.error("Appwrite getCurrent error:", error);
        return null;
    }
};