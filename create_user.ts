
import { upsertUser, getUserByUsername } from "./server/db";
import { hashPassword } from "./server/auth";
import { nanoid } from "nanoid";

async function create() {
  const passwordHash = await hashPassword("Aa123456");
  const newUser: any = {
    openId: `user_${nanoid()}`,
    username: "Asd1",
    email: "asd1@example.com",
    passwordHash,
    tribe: "roman",
    role: "user",
  };

  await upsertUser(newUser);
  const user = await getUserByUsername("Asd1");
  console.log("Created User:", JSON.stringify(user, null, 2));
}

create();
