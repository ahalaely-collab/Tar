# Round 15 - Market Logistics Upgrade

## Added
- Merchant return-leg logic after delivery and trade completion
- `merchantHomeVillageId` to keep merchant occupancy tied to the original village
- `market.getTransportQuote` endpoint for distance, travel time, and merchant requirements
- Better market overview payload with village names, ratios, return trips, and remaining time
- UI improvements for:
  - caravan trip quote
  - offer filters
  - merchant occupancy bar
  - active routes table with return trips

## Migration
Apply `drizzle/migrations/0007_market_returns.sql` after round 14 migrations.

## Notes
- Existing market transfers are backfilled so merchant home becomes `fromVillageId`.
- Merchants now remain busy until they actually return home, which is closer to classic Travian behavior.
