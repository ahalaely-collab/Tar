
import { getDb } from "./server/db";
import { villages, resourceFields } from "./drizzle/schema";

async function create() {
  const db = await getDb();
  if (!db) return;

  // Create village for user ID 2
  const newVillage = {
    userId: 2,
    name: "قرية Asd1",
    x: 0,
    y: 0,
    isCapital: true,
    population: 2,
    culturePoints: 0,
    wood: 750,
    clay: 750,
    iron: 750,
    wheat: 750,
    maxWood: 800,
    maxClay: 800,
    maxIron: 800,
    maxWheat: 800,
    lastUpdate: new Date(),
  };

  const [result] = await db.insert(villages).values(newVillage as any);
  const villageId = (result as any).insertId;
  console.log("Created Village ID:", villageId);

  // Create 18 resource fields
  const fields = [];
  for (let i = 1; i <= 18; i++) {
    let type: "wood" | "clay" | "iron" | "wheat" = "wood";
    if (i <= 4) type = "wood";
    else if (i <= 8) type = "clay";
    else if (i <= 12) type = "iron";
    else type = "wheat";

    fields.push({
      villageId,
      position: i,
      type,
      level: 0,
      production: 2,
    });
  }

  await db.insert(resourceFields).values(fields as any);
  console.log("Created 18 resource fields for village", villageId);
}

create();
