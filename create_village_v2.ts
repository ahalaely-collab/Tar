
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
    population: 1,
    wood: 750,
    clay: 750,
    iron: 750,
    crop: 750,
    woodMax: 800,
    clayMax: 800,
    ironMax: 800,
    cropMax: 800,
    woodProduction: 8,
    clayProduction: 8,
    ironProduction: 8,
    cropProduction: 8,
    cropConsumption: 2,
    lastUpdate: new Date(),
  };

  const [result] = await db.insert(villages).values(newVillage as any);
  const villageId = (result as any).insertId;
  console.log("Created Village ID:", villageId);

  // Create 18 resource fields
  const fields = [];
  for (let i = 1; i <= 18; i++) {
    let type: "wood" | "clay" | "iron" | "crop" = "wood";
    if (i <= 4) type = "wood";
    else if (i <= 8) type = "clay";
    else if (i <= 12) type = "iron";
    else type = "crop";

    fields.push({
      villageId,
      fieldId: i,
      resourceType: type,
      level: 0,
    });
  }

  await db.insert(resourceFields).values(fields as any);
  console.log("Created 18 resource fields for village", villageId);
}

create();
