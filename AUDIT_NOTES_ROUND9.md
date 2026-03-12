# Round 9 Audit and Stabilization

This round focuses on high-risk correctness issues rather than adding new features.

## Fixed in this round
- Alliance creation now returns the real alliance id instead of a hard-coded placeholder.
- Alliance founder is stored as `founder` and cannot silently leave as the only leader/founder.
- Alliance info now returns a real member count.
- Messaging now applies a real 5-minute rate window for anti-spam checks.
- Messaging now returns the real message id instead of a placeholder.
- Construction creation no longer falls back to fake id `1` when queue persistence fails.
- Troop training no longer falls back to fake id `1` when the troop row cannot be confirmed.
- Troop movement creation no longer falls back to fake id `1` when persistence fails.
- Packaging cleanup for the handoff archive excludes `.env`, `dist`, and log folders.

## Still recommended next
- Convert troop training into a timed queue instead of instant completion.
- Convert research and smithy upgrades into timed queues.
- Expand source parity for all building and troop requirements.
- Add stronger transaction handling around gold and resource-consuming operations.
- Add UI-level error states for social, reports, and gold pages where fallbacks still mask backend errors.
