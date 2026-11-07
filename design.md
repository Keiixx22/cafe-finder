# RuangKafe — Cafe Finder Surakarta

> Product and implementation design brief for building the website from the approved Figma design.
>
> **Figma source of truth:** [Open the Cafe Finder Surakarta design](https://www.figma.com/design/wJE9rMrgi1Cdr24vbR0QV0/Untitled?node-id=0-1&t=49dXR15s7T4UUxnx-1)
>
> **Important:** This document defines product intent, feature behavior, and implementation expectations. The actual visual styling (colors, font families, sizes, spacing, component dimensions, imagery, and exact page composition) must be inspected from the Figma file. Do not invent a replacement design when the Figma file is available.

> **Framework requirement:** Build this website with **Next.js** (preferably the App Router with TypeScript). Do not use Laravel/PHP as the application framework.

## 1. Product Overview

RuangKafe is a web-based cafe finder for Surakarta, Central Java, Indonesia. It helps users discover cafes that fit their location, preferred travel radius, facilities, comfort needs, and budget. It also helps users assess whether a cafe is currently busy and organize cafes into personal collections for different activities.

### Main product question

How can a web-based cafe finder provide specific and accurate location recommendations that match users' comfort preferences and facility requirements in Surakarta?

### Primary users

- Students looking for a quiet place to study or work on a thesis.
- Remote workers and freelancers looking for reliable workspace facilities.
- People who need a cafe for meetings or casual work sessions.
- Visitors who want to find a cafe near a specific place in Surakarta.

### Product principles

1. **Location relevance:** Users can search by area, a selected reference point, or their current location (with permission).
2. **Preference relevance:** Recommendations should reflect facilities, comfort preferences, budget, distance, and ratings.
3. **Trustworthy status:** Occupancy information must show its source and update time; stale or missing information must be represented honestly.
4. **Useful recovery:** Empty search results and invalid URLs should guide users to a meaningful next step.
5. **Consistent design:** The Figma file is the visual reference. Reuse existing page patterns and components.
6. **Responsive usability:** The site must work on desktop, tablet, and mobile without horizontal page overflow.

## 2. Design Source of Truth

Use these priorities when making implementation decisions:

1. **Figma:** visual appearance, layouts, colors, typography, spacing, imagery, component styling, page composition, and visible UI copy.
2. **This document:** product behavior, feature scope, data requirements, and acceptance criteria.
3. **Existing repository:** current framework, package manager, dependencies, architecture, and coding conventions.
4. **Reasonable defaults:** only for details that are genuinely unspecified. Record significant assumptions rather than silently inventing requirements.

Before implementation:

- Open the Figma link and inspect all relevant pages, frames, components, and mobile/desktop variants.
- If Figma MCP or another authorized Figma integration is available, use it to inspect the design and retrieve component information.
- Otherwise, use any available Figma export, screenshots, or assets supplied with the project. If the design cannot be accessed, clearly state the blocker and ask for an export/screenshot rather than claiming to have inspected it. Continue only with work that does not require guessing the missing visuals.
- Review the repository before changing files. Identify the app framework, scripts, routes, styling system, and existing components.
- Do not replace working project configuration or rewrite the application from scratch unless necessary.
- Use the exact Figma labels and content where legible. Preserve Indonesian UI copy.

## 3. Core Pages and User Journeys

Implement the screens shown in Figma. The list below describes expected product areas; reuse existing screens if they already exist and do not create duplicates unnecessarily.

### 3.1 Homepage

Purpose: introduce the service and get users into cafe search quickly.

Expected behavior:

- Main search for cafe name or area in Surakarta.
- Clear entry points to browse cafes and the interactive map.
- Quick preference filters where represented in the design, such as quiet atmosphere, Wi-Fi, power outlets, WFC suitability, outdoor seating, or student budget.
- Recommended cafes and/or cafes near the user when data is available.
- Cafe cards link to the correct cafe detail page.

### 3.2 Cafe discovery / search results

Expected behavior:

- Search cafes by name or area.
- Filter by distance, budget, facilities, comfort, rating, and occupancy where available in the design.
- Sort results by relevance, nearest, highest rating, lowest price, or least busy when the underlying data supports the selected sort.
- Display a useful result count and active filter chips.
- Provide reset/clear-filter behavior.
- Show a useful empty state with a way to adjust filters.
- Cafe cards should use consistent data and link to the corresponding detail page.

### 3.3 Interactive map and radius filter

Technology reference: Leaflet.js with OpenStreetMap tiles, unless the existing repository already uses a suitable mapping solution.

Expected behavior:

- Display cafe coordinates as map markers.
- Allow a search reference point to be selected from supported locations, including Universitas Sebelas Maret (UNS), Universitas Muhammadiyah Surakarta (UMS), Manahan, central Surakarta, or a point selected on the map.
- Offer a **Gunakan Lokasi Saya** action that requests browser geolocation permission. Handle permission denied, unsupported devices, and lookup failures gracefully.
- Radius options: **500 m, 1 km, 2 km, 3 km, and 5 km**.
- Show the selected radius visually on the map and filter cafes within it.
- Keep map markers, result cards, and selected cafe state synchronized where feasible.
- Show the number of matching cafes.
- Display distance from the chosen reference point.
- If only coordinates are available, label the computed result as straight-line distance. Do not present it as road distance.
- Show estimated travel time only when a real routing service or reliable route data is integrated. Do not fabricate traffic or route times.
- Provide suitable loading, empty-results, and unavailable-location states.
- On mobile, use a compact filter drawer/bottom sheet and result sheet; do not squeeze the desktop sidebar onto a narrow screen.

### 3.4 Cafe detail

Expected information, when available in the source data:

- Cafe name, photos, address/area, coordinates, opening hours, price range, rating/reviews, and facilities.
- Distance from the user's selected reference point.
- Map location and a route/directions action.
- Current occupancy status and its source/update time.
- Save/bookmark action connected to custom collections when the user is authenticated.

Missing data must be labelled as unavailable or omitted appropriately. Do not invent business facts, ratings, opening hours, prices, or live status.

### 3.5 Occupancy status and reports

Supported statuses:

- **Lengang**
- **Cukup Ramai**
- **Hampir Penuh**
- **Penuh**

The status component should display, where available:

- Current reported status.
- Last updated timestamp.
- Information source (community or authorized cafe manager/admin).
- Count of recent reports.
- A clear indication when information is stale or unavailable.

User report flow:

1. User clicks **Laporkan Kondisi Kafe**.
2. A dialog/bottom sheet opens with the four status options and an optional note.
3. User submits the report.
4. The app validates and saves the report when backend support is available.
5. The UI shows success or a useful error state.

Important behavior:

- This is community/owner-reported occupancy, not automatic people counting.
- Do not claim a status is truly live or verified unless the data source supports that claim.
- Apply reasonable rate limiting, validation, and moderation where backend infrastructure is available.
- A report submitted by a normal user should not silently overwrite a verified occupancy state without an explicit product rule.

### 3.6 Custom workspace collections

Authenticated users can organize cafes into named personal collections rather than only using one generic favorites list.

Example collections:

- Kafe Super Hening untuk Ngerjain Skripsi
- Kafe Nyaman untuk Meeting Klien
- Budget Mahasiswa di Bawah Rp20.000
- WFC dengan Wi-Fi Cepat
- Kafe dengan Banyak Stopkontak

Expected behavior:

- View the user's collections.
- Create a collection with a name and optional description/cover, according to the design.
- Edit collection details.
- Delete a collection with a confirmation dialog.
- Add a cafe to one or more existing collections.
- Create a new collection as part of the save flow.
- Remove a cafe from a collection.
- Open collection detail and browse its cafes.
- Show empty states for new collections.
- Keep private collections accessible only to their owners.
- If the user is not authenticated, show a login prompt and preserve the intended action when practical.

### 3.7 Authentication

Use the login, registration, and password recovery screens if present in Figma.

Expected behavior:

- Validate required fields and email format.
- Display clear inline validation and submission states.
- Use secure authentication from the existing framework; never store plain-text passwords.
- Protect collection and account-specific routes.
- Preserve existing screen design and navigation.

### 3.8 Admin / data management

If the admin dashboard appears in Figma or is included in the project scope, support authorized administration for:

- Cafe records, coordinates, facilities, images, prices, and opening hours.
- Occupancy report moderation and status updates.
- Basic data quality and stale-data monitoring.
- User or review management only when included in the current design/scope.

Admin routes and actions must be protected by authorization, not just hidden from the UI.

### 3.9 Custom 404 page

Implement the approved 404 design from Figma. Preserve its visual hierarchy and interactive recovery paths.

Expected interactions:

- **Kembali ke Beranda** goes to the existing homepage.
- **Jelajahi Kafe** goes to the existing cafe discovery page.
- Search input accepts a cafe name or area and submits to the existing search flow.
- Location suggestion chips (for example Manahan, Laweyan, Jebres, and Dekat UNS) select the corresponding query/filter and lead to discovery.
- Any recommended cafe cards link to their matching detail pages when such pages/data exist.
- Logo returns to the homepage.

Do not show a 404 page for normal empty search results, loading failures, or API errors. Those should use separate UI states.

## 4. Recommendation and Filtering Logic

The design can display matching reasons, but actual matching claims must be calculated from data.

Recommended initial approach:

1. Apply hard constraints first when selected, such as distance radius and maximum budget.
2. Filter by required facilities and location.
3. Rank remaining cafes against softer preferences such as comfort, rating, and suitability for working.
4. Explain the match with available evidence, such as: “Memiliki Wi-Fi dan stopkontak, berada dalam radius 2 km, serta sesuai kisaran harga pilihanmu.”

Do not display a percentage such as “92% cocok” unless an implemented scoring algorithm calculates it. If no scoring logic exists yet, use descriptive labels such as “Sesuai preferensi” based on real matched attributes.

A simple weighted score can be added only when the project needs ranking beyond filtering. Document the weights and ensure unavailable attributes do not count as positive matches by default.

## 5. Data Model Guidance

Inspect the existing schema first. Extend it rather than creating duplicate entities. The following is a logical reference, not a requirement to use these exact table names.

- **users**: authenticated user identity and role.
- **cafes**: name, slug, description, address/area, latitude, longitude, price range, opening hours, contact/link fields, and verification state as needed.
- **facilities**: reusable facility definitions (for example Wi-Fi, power outlets, AC, indoor/outdoor seating).
- **cafe_facilities**: many-to-many relation between cafes and facilities, with optional availability/details.
- **reviews**: user review/rating data if in scope.
- **occupancy_reports**: cafe, status, optional note, reporter/source, creation timestamp, moderation state, and any audit metadata needed.
- **user_collections**: owner, collection name, description, visibility, and timestamps.
- **collection_items**: collection-to-cafe relation with uniqueness constraints and optional sort order.

Use foreign keys, indexes for common location/search queries where appropriate, validation, and consistent timestamps. Protect private collection data by ownership checks. Do not put secrets or API credentials in frontend code.

## 6. Technology and Repository Rules

**Required framework: Next.js.** This is an explicit project requirement, not an optional suggestion.

First inspect the existing repository and its package manager, dependencies, scripts, routing, styling, database, and coding conventions. Then apply these rules:

- If the repository already uses Next.js, continue with its existing version, architecture, and conventions unless a change is necessary.
- If the repository is empty, initialize a modern Next.js application using the **App Router and TypeScript**.
- If the repository uses a different framework, do not silently continue with that framework instead of Next.js. Assess the existing code and assets, then migrate/adapt the project to Next.js while preserving reusable work. Explain any migration risks and avoid destructive changes.
- Do not use Laravel/PHP or Blade as the primary application framework.

Recommended baseline for a new project:

- Framework: Next.js App Router with TypeScript.
- UI styling: reproduce the values from Figma using CSS modules, Tailwind CSS, or the existing suitable styling system. Do not introduce a styling framework if it harms visual fidelity.
- Server functionality: Next.js Route Handlers and/or Server Actions where suitable.
- Database: MySQL, using Prisma or another compatible data access layer if one is not already present.
- Maps: Leaflet.js with OpenStreetMap; load browser-dependent map components as client components and use dynamic imports when required by SSR constraints.
- Authentication: use an established, secure solution compatible with Next.js, or the repository's existing implementation.

If the repository already has a compatible database, ORM, authentication provider, or UI system, reuse it when practical. Do not expose secrets or database credentials to client components. Keep server-only code and environment variables on the server.

Implementation rules:

- Build reusable UI components for buttons, inputs, cafe cards, facility chips, occupancy badges, dialogs, filters, and empty/loading/error states.
- Use shared design tokens based on the Figma values; avoid arbitrary one-off styling.
- Keep business logic separate from presentational components when the stack allows it.
- Use environment variables for secrets and external service credentials.
- Validate inputs on both client and server when backend endpoints exist.
- Handle failed network requests and missing data gracefully.
- Do not fabricate cafe listings or location results. Clearly mark seed/demo data as sample data.
- Do not claim third-party APIs are integrated unless they are actually configured and working.
- Avoid unnecessary dependencies and unrelated refactoring.

## 7. Responsive Design Requirements

Use the actual responsive frames/variants in Figma when available. If a viewport has no explicit Figma frame, adapt the desktop design without changing its identity.

Test at minimum:

- 320 px
- 375 px
- 390 px
- 430 px
- 768 px
- 1024 px and wider

Expected outcomes:

- No page-level horizontal overflow.
- Header and navigation fit mobile layouts.
- Search inputs and primary actions remain easy to tap.
- Cafe cards reflow without clipped names or controls.
- Map controls, filter drawers, and result panels remain usable on touchscreens.
- Modals and forms fit within the viewport and can scroll when necessary.
- Mobile safe areas and bottom navigation do not obscure content.
- Hover is never the only way to access important functionality.
- Existing click/navigation behavior remains intact.

## 8. UI States and Accessibility

Implement useful UI states where applicable:

- Default, hover, focus, pressed, and selected.
- Loading/skeleton.
- Empty search results.
- Empty collections.
- Validation errors.
- Request failure.
- Geolocation denied/unavailable.
- Occupancy status unavailable or stale.
- Save/report success and failure.
- Confirm delete.

Accessibility expectations:

- Use semantic HTML and correct input labels.
- Keyboard-accessible controls and dialogs.
- Visible focus indication.
- Accessible contrast based on the existing palette.
- Do not rely on color alone to communicate occupancy status.
- Provide useful alt text for meaningful images.

## 9. Definition of Done

The implementation is considered complete when:

- [ ] Relevant Figma frames have been inspected and the visual result follows them closely.
- [ ] The application uses Next.js; existing compatible code and dependencies are reused where practical.
- [ ] All required screens are implemented or connected to existing screens without unnecessary duplicates.
- [ ] Navigation, forms, filters, cards, and CTA buttons have working behavior.
- [ ] Radius filtering uses actual cafe coordinates and clearly distinguishes straight-line distance from road distance.
- [ ] Browser geolocation handles permission and failure states.
- [ ] Occupancy states show source and timestamp, with stale/unavailable states.
- [ ] Custom collections support create, view, edit, delete, add, and remove where backend support is available.
- [ ] Authentication and ownership checks protect private collections and admin actions.
- [ ] Search/filter empty and error states are handled.
- [ ] Mobile layout works at the target viewport widths without page-level horizontal overflow.
- [ ] The 404 page and its navigation/search recovery actions work.
- [ ] No fake “live” data, fabricated ratings, or uncalculated recommendation percentages are presented as real.
- [ ] The project builds/runs with documented setup instructions, and any incomplete integrations are explicitly listed.

## 10. Collaboration Expectations for the Coding Agent

Work in small, verifiable stages:

1. Inspect the repository and Figma design; report the framework, relevant screens, design tokens, and any access limitations.
2. Summarize the implementation plan before making major architectural changes.
3. Implement the design system and core shared components.
4. Build the main user journey: homepage → search/map → results → cafe detail.
5. Add occupancy reporting and custom collections.
6. Add or connect authentication, admin tools, and 404 behavior as applicable to the design/scope.
7. Implement responsive behavior and test the critical viewport sizes.
8. Run available lint, type-check, tests, and build commands. Fix issues caused by the implementation.
9. Provide a concise summary of changed files, how to run the project, what has been tested, and what still needs external API keys or backend configuration.

Never claim a visual inspection, test, build, or external integration succeeded unless it was actually performed. If a blocker prevents exact implementation, state it clearly and proceed with the parts that can be completed safely without guessing the design.
