Round 26 stabilization patch

Implemented in this patch:
- Added missing tRPC endpoints for academy/smithy gold and research flows.
- Added building rule for Trade Office.
- Enforced village protection in outgoing attacks and on arrival.
- Reduced misleading UI fallbacks in Stats, Social, Reports, and Map by loading the primary village context.

Still recommended next:
- Full fallback cleanup in Village/Barracks/Stable/Gold/BuildNew.
- Base migration for clean install from zero.
- Runtime integration test with real DB.
