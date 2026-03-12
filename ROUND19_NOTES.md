Round 19

Implemented:
- Added `gameEvents` table and migration `0008_game_events.sql`.
- Added `server/events.ts` with helpers to write and read world/news events.
- Battle arrival processing now records world news events for victory/defense outcomes.
- Ranking/news feed now pulls from the event log helper.
- Trade Office overview now exposes merchant totals, busy/free counts, total capacity, and next-level total capacity.
- Trade Office page now shows busy/free merchants directly.
- Stats labels updated to use “معجزة العالم”.

Notes:
- This round focused on backend event logging and richer stats/news plumbing.
- The client side stats screen still needs one more cleanup pass for exact visual parity and safer JSX validation.
