ROUND 23 - WORLD ACTIONS + EVENT SOURCES

Implemented:
- Added villages.protectionUntil and users.withdrawnAt schema fields.
- Added migration 0009_world_state_events.sql.
- Added world phase seeding via ensureWorldPhaseEvents().
- Added gold router:
  - gold.getTransactions
  - gold.activateProtection
- Gold page now loads gold transactions and activates 12h protection for real.
- Added social.withdrawFromWorld mutation.
- Social page now includes a dangerous action section for withdrawing from the world.
- Protection and withdrawal now create real gameEvents, improving the world news feed.
