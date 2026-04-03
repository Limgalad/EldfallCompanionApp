# Eldfall App Project Plan

## Project Overview
A companion app for Eldfall Chronicles, featuring mission overviews, rules documentation, and integration with the Guildhall Army Builder.

## Roadmap

### 🚨 Current Priorities (Work on these first)
- [x] **Rules Wiki Refactor**: Move "States & Conditions" out of "Mechanics" into its own dedicated sub-section (like Traits and Skills).
- [x] **Rules Wiki Expansion**: Extend the text under "Skills" by referencing the rules markdown files. *(Reverted: Removed to keep design consistent with other tabs)*

- [x] **Phase 1: Landing Page**
    - [x] Create a visually stunning Home page with Eldfall-style artwork.
    - [x] Implement main navigation menu.
- [x] **Phase 2: Quest Overview**
    - [x] Implement Season 1 mission list.
    - [x] Create detailed mission views with setup, results, and quest rules.
    - [x] Include tactical map visualizations for each mission.
    - [x] Structure for future season archiving.
- [x] **Phase 3: Rules Wiki**
    - [x] Implement a comprehensive, searchable rules database.
    - [x] Include core mechanics, classes, skills, traits, and combat arts.
    - [x] Create a detailed rulebook reference (`RulesEldfall1.6.md`).
    - [x] **Full Makeover**: All rule tiles (Traits, Skills, States, Combat Arts, Classes) are now clickable and open a detailed modal with full text.
- [ ] **Phase 4: Expanded Reference**
    - [ ] **Spell Book**: Implement a spell reference tile with all spells categorized by their relative school.
    - [ ] **Creatures**: Add a creature database to view stats and behaviors.
    - [ ] **Quest Schemes**: Implement a tile for all schemes used in Quests.
    - [ ] **Equipment & Upgrades (Nice to have)**: Add a reference for all equipment and upgrades.
- [ ] **Phase 5: Admin & Content Management**
    - [ ] **Editing Mode**: Add a secure editing mode to add, modify, or hide tiles and rules.
    - [ ] **Database Migration**: Move hardcoded data (Rules, Quests) to Firebase Firestore for dynamic updates.
    - [ ] **Authentication**: Implement Google Login restricted to the owner's email (`koendeurloo1987@gmail.com`).
    - [ ] **Impact Analysis**:
        - **Complexity**: Moving to a dynamic database requires a significant refactor of the data layer.
        - **Security**: Access will be strictly controlled via Firebase Auth and Security Rules.
        - **Flexibility**: Allows the owner to update content without code changes.
- [x] **Phase 6: Polish & Assets**

## Resources
- [RULES_SUMMARY.md](/Rulles and FEQ's/RULES_SUMMARY.md): Quick access summary of Core Rules v1.6 and Season 1 Quests.
- [RulesEldfall1.6.md](/Rulles and FEQ's/RulesEldfall1.6.md): Full rulebook text for internal reference.
- [ERRATA_FEB_2026.md](/Rulles and FEQ's/ERRATA_FEB_2026.md): Latest errata and rule updates (Feb 2026).

## Maintenance & Support

### Sponsor Options
To make the "Support This Project" button functional, you can use any of the following platforms:
- **Buy Me a Coffee**: `https://www.buymeacoffee.com/yourusername` (Casual, credit card/Apple/Google Pay)
- **Ko-fi**: `https://ko-fi.com/yourusername` (0% platform fees, very flexible)
- **PayPal.me**: `https://www.paypal.me/yourusername` (Direct and simple)
- **Patreon**: `https://www.patreon.com/yourusername` (For recurring monthly support)

### Bug Report Configuration (SMTP)
To enable the server-side bug reporting feature, you need to provide the following environment variables in the platform settings:
- `BUG_REPORT_EMAIL`: The email address where you want to receive reports (e.g., `koendeurloo1987@gmail.com`).
- `SMTP_HOST`: Your email provider's SMTP server (e.g., `smtp.gmail.com`).
- `SMTP_PORT`: Usually `587` for TLS or `465` for SSL.
- `SMTP_USER`: Your email address used for sending (e.g., `your-app-email@gmail.com`).
- `SMTP_PASS`: Your email password or App Password (recommended for Gmail).
- `SMTP_SECURE`: Set to `true` if using port 465, otherwise `false`.

## Working Log

### 2026-04-01
- Initialized project planning document.
- Defined core features: Home Page, Quest Overview, Rules Wiki, and Guildhall link.
- Implemented Phase 1: Landing Page with Eldfall-style typography and navigation grid.
- Configured global theme and custom fonts (Cinzel, Inter).
- Implemented Phase 2: Quest Overview. Extracted Season 1 mission data and created a responsive mission browser.
- Updated Quest Overview with full text for all Season 1 quests (Open Hostilities, Awaiting Reinforcements, Treasure Hunt, Supply Run, Secure the Artefact, Magic Stones), including special end conditions and detailed quest rules.
- Created `RULES_SUMMARY.md` as a condensed reference for core mechanics, phases, states, and quest objectives.
- Completed Phase 3: Rules Wiki. Implemented a searchable database for mechanics, traits, skills, classes, and combat arts.
- Updated Combat Arts with accurate data from page 75 of the rulebook (v1.6), grouping them by category (Archery, Assassination, Berserk, Fencing) and including all levels (I-V).
- Performed a comprehensive revision of the rules data against the full `RulesEldfall1.6.md` rulebook.
- Implemented missing States (Fatigued, Immobilized, Slowed, Weakened), Traits (Continuous, Elemental Essence, Familiar, Mana Cost), and Classes (Sorcerer, Vitalist, Creature, Civilian).
- Added new core rule sections for Casting Aura, Summoning Limit, Fall Damage, Measuring Modes, Inventory & Weight, and Environments.
- Updated `RULES_SUMMARY.md` to include these new core elements and mechanics.
- Populated the Rules Wiki with full text for all core attributes, dice rolls, game sequence, combat mechanics, magic rules, common states, traits, skills, classes, and combat arts.
- Converted the application to a full-stack architecture (Express + Vite) to support secure bug reporting.
- Implemented a server-side `/api/report-bug` endpoint using `nodemailer` to send reports without exposing the developer's email in the client-side code.
- Added environment variable support for SMTP configuration and target email in `.env.example`.
- Updated the Bug Report Modal with a direct form submission, loading states, and success/error feedback.
- Created `CORE_RULES_FULL.md` for internal reference.
- Added "Maintenance & Support" section to `PLANNING.md` with sponsor options and SMTP configuration requirements.
- Fixed a build error related to the `classes` data export in `src/data/rules.ts`.
- Implemented Progressive Web App (PWA) support, allowing the app to be installed on mobile devices.
- Added a "Scroll to Top" floating action button for improved navigation on long pages.
- Finalized SMTP configuration for bug reporting, supporting Gmail App Passwords.

### 2026-04-02
- Performed a complete data audit of the Rules Wiki, ensuring all Traits, Classes, and Combat Arts exactly match the v1.6 rulebook.
- Verified and updated the "Archery" Combat Art to reflect the correct 6-inch range increase for "Overdraw".
- Cleaned up temporary data extraction scripts.
- Refined the "Support This Project" message to match the user's exact wording.
- Integrated custom tactical maps for Season 1 missions (Awaiting Reinforcements, Treasure Hunt, Supply Run, Secure the Artefact, Magic Stones).
- Removed the placeholder map for "Open Hostilities" and updated the UI to handle missions without tactical maps gracefully.
- Verified and updated all mission map references to use the latest user-provided images.
- Updated the Home page background to a high-quality fantasy landscape with a subtle zoom animation.
- Integrated Google Analytics (G-RGGPYPQ255) for traffic and visitor tracking.
- Implemented a math CAPTCHA for the bug report form (client and server-side) to prevent automated spam.
- Optimized the PWA update strategy to `autoUpdate` with automatic cache cleanup to ensure users always see the latest version.
- Added a version number and update timestamp to the app footer (Version 1.0.4) for easier verification of live updates.
- Implemented SEO optimizations: added meta keywords, Open Graph, and Twitter tags to `index.html`.
- Created `robots.txt` and `sitemap.xml` in the public directory to improve Google indexing.
- Enhanced `manifest.json` description for better search discoverability.
