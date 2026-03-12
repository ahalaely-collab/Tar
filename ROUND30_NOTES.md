# Round 30 - Entry Flow and Hardcoded Route Cleanup

## What was fixed
- Rebuilt `client/src/pages/Home.tsx` so it no longer assumes `villageId=1`.
- Home now loads the player's real villages using `village.list` and routes into the first real village.
- Removed fake village card / fake stats from the logged-in home page.
- Cleaned the top navigation links on the home page so they point to real routes:
  - fields
  - buildings
  - reports
  - stats
  - map
- Updated `client/src/pages/Artifacts.tsx` to stop hardcoding `/village/1` and `/village/1/barracks`.
- Artifacts page now resolves the player's real village id via `resolveVillageId()` and builds links dynamically.

## Why this matters
This closes one of the most visible integration leaks: the UI was still teleporting users to village 1 in multiple places. That behavior could mask ownership and routing problems and created a brittle first-run experience.

## Remaining follow-up
- Review any remaining hardcoded routes in legacy/secondary pages.
- Run a full typecheck/build in a real environment with dependencies installed.
- Continue backend integration hardening for world-endgame systems and rare-edge flows.
