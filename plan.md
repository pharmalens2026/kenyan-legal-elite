# Task: Fix Logo and Tagline Overlap

The user reported that the logo is blocking/obscuring the words "Excellence", "Integrity", and "Authority". These words are currently located at the top of the Hero section, and the fixed Navbar (containing the logo) is overlapping them on initial page load.

## Proposed Changes:

### 1. src/components/layout/Navbar.tsx
- Maintain the current text-based logo structure.
- Ensure the Navbar has a clear z-index and doesn't have unnecessary bulk that could contribute to visual blocking.
- Add a subtle tagline version of the words to the desktop logo to integrate them into the brand identity, while ensuring it's well-spaced.

### 2. src/components/sections/Hero.tsx
- **Primary Fix**: Add top padding (`pt-24` on mobile, `pt-32` on desktop) to the Hero content container. This ensures that the first element (the tagline) is pushed down below the fixed Navbar area.
- Adjust the `flex` alignment if necessary to ensure the content remains aesthetically centered while accounting for the Navbar height.
- Maintain the "Excellence • Integrity • Authority" text as the first element of the Hero content.

## Verification:
- Check that the tagline in the Hero is fully visible on both mobile and desktop views upon page load.
- Ensure the Navbar logo remains legible and doesn't overlap with any other elements.
