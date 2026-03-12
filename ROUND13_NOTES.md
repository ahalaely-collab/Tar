# Round 13 - Social UX and alliance discovery

## Added
- Player search by username for compose flow
- Send message by username endpoint
- Alliance search by tag/name endpoint
- Improved Social page:
  - inbox/sent table with read state
  - open / delete / reply actions
  - username suggestions while composing
  - alliance search and direct join by result card

## Files changed
- server/messaging.ts
- server/alliance.ts
- server/routers/social.ts
- client/src/pages/Social.tsx

## Notes
- This round focuses on making the social layer usable like a real browser strategy game.
- It avoids schema changes and is safe to apply on top of the previous round.
