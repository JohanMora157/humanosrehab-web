# HUMANOS HUB Design

## Goal

Introduce HUMANOS HUB as the umbrella for four related areas: Humanos Clínica, Humanos Activo, Stretching Lab, and Academia. Visitors should be able to understand the difference between each area from the home page and Services, then open the relevant destination.

## Existing context

- `/inicio` currently presents the hero, five clinical service preview cards, the `BrandIntro` section, testimonials, gift cards, and a final CTA.
- `/servicios` contains the five existing clinical service groups and their detailed information. The first group is Fisioterapia Integral.
- The header has global navigation and should not gain links to the three new areas.
- The project uses Next.js App Router, Tailwind CSS, Lucide icons, and the existing shared `PageLayout` and `PageHeader` components.

## Experience

1. Add a four-area HUMANOS HUB section to the home page, after the main hero and before the existing `BrandIntro` section. Each area is represented by a concise card with an image, name, summary, and clear link.
2. Add the same four-area section near the top of `/servicios`, followed by the current detailed clinical catalog. Keep the five clinical service groups and their content available.
3. The Humanos Clínica card links to `/servicios?servicio=fisioterapia-integral#fisioterapia-integral`, opening the existing clinical catalog at Fisioterapia Integral.
4. Add standalone pages at `/humanos-activo`, `/stretching-lab`, and `/academia`. These pages use the shared site layout and visual language, explain the purpose and sample offerings of their area, and provide a contact-oriented next step.
5. Do not add these destinations to the header.

## Provisional content

- **Humanos Activo:** ongoing movement, strength, mobility, and periodic follow-up after a clinical rehabilitation process.
- **Stretching Lab:** guided stretching, mobility, and calm physical activity for general wellbeing, separate from injury treatment.
- **Academia:** introductory learning for the general public and professional education for physiotherapists.

All copy for these three new areas is provisional. Avoid invented prices, schedules, credentials, clinical outcome statistics, or claims that imply a confirmed program. Reuse suitable imagery already available in the repository where possible; use generic imagery only where no existing image fits.

## Architecture

- Create a reusable HUMANOS HUB data source and card section consumed by both `/inicio` and `/servicios` so titles, descriptions, routes, and images stay aligned.
- Keep the existing clinical catalog as the source for detailed clinical offerings. Its current deep-link selection behavior remains the mechanism for opening Fisioterapia Integral.
- Add one focused page component per new route. Use shared layout and CTA patterns rather than adding a new navigation system or booking backend.

## Acceptance criteria

- The home page and `/servicios` show the same four HUMANOS HUB areas with matching copy and images.
- The Clínica card opens the existing Fisioterapia Integral section.
- Each of the other three cards opens its own page with relevant provisional content and imagery.
- No new header links are added for these three pages.
- Existing five clinical groups remain reachable and retain their current information.
- Pages remain readable on mobile and desktop, and their links and image alternatives are accessible.

## Verification approach

Check the rendered home page, Services page, and all three new routes at desktop and mobile sizes. Follow each hub link and confirm the clinical destination opens Fisioterapia Integral. Run the project's TypeScript check and inspect the final diff for unintended changes.
