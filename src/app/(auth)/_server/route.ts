import { loginSchema, registerSchema } from "@/schema";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

const app = new Hono()
    .post("/login", zValidator("json", loginSchema), (c) => {
        const { email, password } = c.req.valid("json");
        return c.json({ success: "ok" });
    })
    .post("/register", zValidator("json", registerSchema), (c) => {
        const { name, email, password } = c.req.valid("json");
        return c.json({ success: "ok" });
    });

export default app;
