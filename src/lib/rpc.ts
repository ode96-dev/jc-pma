import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";
import "dotenv/config";


export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL as string)