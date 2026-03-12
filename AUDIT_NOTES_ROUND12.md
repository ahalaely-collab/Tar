# Round 12 - Integration and UX hardening

## What changed
- Upgraded the classic shell header and fixed resource icon order.
- Added unread message badge in the game header.
- Reworked village page to show real construction queue countdowns and live troop movements.
- Reworked map page to highlight player villages fetched from the backend.
- Reworked reports page to combine battle reports with active movements side panel.
- Reworked social page into three real sections: messages, rankings, alliance.
- Added a new backend endpoint: `social.getMyAlliance`.
- Improved Village Center routing so key slots open real pages where possible.

## Notes
- Alliance joining still expects alliance ID input because no searchable alliance directory endpoint exists yet.
- Messaging compose uses `toUserId` directly; a username lookup endpoint would be a good next step.
- Map still uses a hybrid model: real player villages plus placeholder world tiles until a full world map endpoint exists.
