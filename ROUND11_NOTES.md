# Round 11 - Queue UI Integration

## Implemented
- Added live queue panels with countdown timers for:
  - Barracks
  - Stable
  - Academy
  - Blacksmith
- Switched Barracks/Stable pages to backend-driven unit availability via `battle.getTrainableUnits`
- Added queue fetching via `battle.getQueues`
- Disabled duplicate research/upgrade actions while items are already in queue
- Exposed troop `trainingInProgress` counts in normalized village payload
- Added reusable queue utilities and queue panel component for cleaner UI integration

## Files Added
- client/src/lib/queueUtils.ts
- client/src/components/QueuePanels.tsx

## Files Updated
- client/src/lib/api.ts
- client/src/pages/Barracks.tsx
- client/src/pages/Stable.tsx
- client/src/pages/Academy.tsx
- client/src/pages/Blacksmith.tsx
