
import { SignJWT } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "dev-secret-key-change-in-production");
const JWT_EXPIRY = "7d";

async function generateToken(userId: number, username: string): Promise<string> {
  const token = await new SignJWT({
    userId,
    username,
    iat: Math.floor(Date.now() / 1000),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(JWT_EXPIRY)
    .sign(JWT_SECRET);

  return token;
}

// Generate token for user Asd1 (ID 2)
generateToken(2, "Asd1").then(console.log);
