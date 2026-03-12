# Round 14 - Market System

Implemented a classical market module with modern wiring:

- New backend router: `market.*`
- New page: `client/src/pages/Market.tsx`
- New DB objects: `marketListings`, `marketTransfers`
- Supports:
  - sending resources between owned villages
  - creating barter offers
  - buying public offers
  - cancelling own offers
  - merchant availability based on market level
  - cron delivery of arriving merchant convoys

Known next-step opportunities:
- add precise merchant return trips
- add filters/sorting on public offers
- expose market directly from BuildNew when market is not constructed yet
- add alliance resource shipments and trade office bonuses
