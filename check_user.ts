
import { getUserByUsername } from "./server/db";

async function check() {
  const user = await getUserByUsername("Asd1");
  console.log("User Asd1:", JSON.stringify(user, null, 2));
}

check();
