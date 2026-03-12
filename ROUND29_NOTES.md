Round 29 focused on deeper integration cleanup after the previous QA sweep.

What changed:
- Added a reusable village resolver on the client to stop defaulting internal pages to villageId=1 when the route param is missing or invalid.
- Hardened tRPC client error extraction so server-side messages survive non-200 responses instead of collapsing into generic HTTP errors.
- Updated GameLayout to avoid building broken internal links around village 1 when no active village is known.
- Replaced market storage fallback caps (999999) with a capacity helper that respects real village caps and only falls back to MAX_SAFE_INTEGER when caps are genuinely unavailable.

Why this matters:
- Internal pages now fail more honestly and recover toward the player's first actual village instead of silently drifting to village 1.
- Market arrivals no longer hide schema/cap issues behind arbitrary large limits.
- Runtime diagnostics are clearer for the next QA pass.
