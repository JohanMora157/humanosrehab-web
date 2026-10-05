# HUMANOS HUB Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present four HUMANOS HUB areas on Home and Services, with dedicated destinations for Humanos Clínica, Humanos Activo, Stretching Lab, and Academia.

**Architecture:** A typed shared data module defines the four areas and their provisional copy, existing images, destinations, and page details. A reusable card section appears on Home and Services; one reusable detail page renders the three non-clinical routes. The existing clinical catalog moves to `/humanos-clinica` and its Fisioterapia Integral deep link serves the Clínica area.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, `next/image`, Lucide icons, existing `PageLayout` and `PageHeader`.

**Spec:** `docs/superpowers/specs/2026-10-05-humanos-hub-design.md`

## Global Constraints

- Keep the three new destinations out of the header.
- Keep the clinical catalog off `/servicios`; it is available from the Humanos Clínica card at `/humanos-clinica`.
- Keep the current five detailed clinical service groups reachable with their current content.
- All content for Humanos Activo, Stretching Lab, and Academia is provisional.
- Avoid invented prices, schedules, credentials, clinical outcome statistics, or confirmed-program claims.
- Use suitable images already available in the repository where possible.

## Review Focus

- Unknown area slug: render a not-found result instead of silently showing another area.
- Clínica destination: preserve the selected Fisioterapia Integral deep link.
- Phone viewport: four hub cards and page content must fit without horizontal overflow.
- Existing Services deep links: keep all five clinical catalog accordions addressable.
- Images: each card and detail page must have an informative alt description and load in the app.

---

### Task 1: Shared HUMANOS HUB Data and Entry Cards

**Files:**
- Create: `lib/humanos-hub.ts`
- Create: `components/hub/hub-section.tsx`
- Modify: `app/inicio/page.tsx`
- Modify: `app/servicios/page.tsx`
- Remove: `components/home/services-preview.tsx` after replacing its only use

**Interfaces:**
- `lib/humanos-hub.ts` exports `hubAreas`, an ordered readonly collection of four typed entries. Each entry has `id`, `name`, `summary`, `image`, `imageAlt`, `href`, `highlights`, `description`, and `sections` for the detail view.
- `components/hub/hub-section.tsx` exports `HumanosHubSection({ placement }: { placement: "home" | "services" })` and renders four accessible cards from `hubAreas`.
- Clínica uses `/humanos-clinica` and shows Fisioterapia Integral open by default; the other entries use `/humanos-activo`, `/stretching-lab`, and `/academia`.

- [x] Add the four ordered area entries and provisional Spanish copy to `lib/humanos-hub.ts`. Reuse relevant image URLs already present in `lib/service-catalog.ts` and give each area an accurate alt description.
- [x] Build `HumanosHubSection` with responsive image cards and a heading that identifies HUMANOS HUB.
- [x] Replace the old five-card home preview with `HumanosHubSection` after `HeroSection` and before `BrandIntro`.
- [x] Render the same section near the top of `/servicios`, before the existing `ServiceCatalog`.
- [x] Remove the obsolete `ServicesPreview` component after confirming there are no remaining imports.
- [x] Request Home, Services, and the Clínica deep link from the local server; all returned HTTP 200.

### Task 2: Three Area Detail Pages

**Files:**
- Create: `components/hub/hub-detail-page.tsx`
- Create: `app/humanos-activo/page.tsx`
- Create: `app/stretching-lab/page.tsx`
- Create: `app/academia/page.tsx`

**Interfaces:**
- `HubDetailPage({ areaId }: { areaId: "humanos-activo" | "stretching-lab" | "academia" })` reads the matching entry from `hubAreas` and renders its page header, image, introduction, provisional sections/highlights, and contact CTA.
- Each route exports unique metadata and passes its exact `areaId` to `HubDetailPage`.
- If the shared detail component cannot find its requested area, call Next.js `notFound()`.

- [x] Build the shared detail component using the existing `PageLayout` and `PageHeader` styles and `next/image` for the primary image.
- [x] Add the Humanos Activo route with provisional follow-up, movement, mobility, and habit-building information.
- [x] Add the Stretching Lab route with guided stretching and calm mobility activities, explicitly framed as wellbeing rather than injury treatment.
- [x] Add the Academia route with separate introductory learning and professional education sections.
- [x] Use a contact-oriented CTA (`/contacto`) for these new offerings; do not route them into clinical appointment booking.
- [x] Request all three detail route responses from the local server; all returned HTTP 200.
- [ ] Review page layout and imagery visually at desktop and mobile widths.

### Task 3: Branch Review and Local Preview

**Files:**
- Review: all files from Tasks 1 and 2, plus `app/servicios/page.tsx` and `components/servicios/service-catalog.tsx`

**Interfaces:**
- No new public interface; verify the area IDs, card destinations, and existing clinical selection behavior work together.

- [x] Start the Next.js dev server on port 3012 and provide its local URL.
- [ ] Open each of the four cards from Home and Services and confirm its correct destination.
- [x] Confirm no header links were added and the existing clinical catalog remains in the Services page.
- [x] Review the final diff and run `git diff --check`; no whitespace errors were reported.
- [ ] Check Home, Services, and new pages at desktop/mobile widths for layout overflow and missing images.
