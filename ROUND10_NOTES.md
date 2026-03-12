Round 10 - Timed Queues and Engine Hardening

What changed:
- Added real queue tables for troop training, academy research, and smithy upgrades.
- Training no longer grants troops instantly; troops are added when the queue item completes.
- Academy research no longer unlocks units instantly in normal mode; research is queued and completed by cron.
- Smithy upgrades no longer apply instantly in normal mode; upgrades are queued and completed by cron.
- Added battle.getQueues endpoint for client polling of active queues.
- Cron now processes timed queues through battle.processTrainingResearchAndSmithyQueues().

Files touched:
- drizzle/schema.ts
- drizzle/migrations/0005_training_research_smithy_queues.sql
- server/battle.ts
- server/routers/battle.ts
- server/cron.ts

Notes:
- Gold-based actions still complete instantly by design in this round.
- UI pages can now be wired to battle.getQueues to show active timers and queue rows.
