Round 31
- Fixed a real runtime issue in Artifacts.tsx where navigation links were built before their dependent village href variables existed.
- Added live village context loading to Artifacts so the page header now reflects the current village resources instead of acting as an isolated static page.
- Improved Home.tsx so the top resource bar uses the first real village's data when available, rather than showing permanent zeros.
- Kept safe fallbacks when village context cannot be loaded.
