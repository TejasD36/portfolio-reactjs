# Portfolio Projects Tracker

Use this file as the checklist for portfolio project coverage. When adding a project to the site, add or update it here and then make sure it exists in `src/constants/portfolioData.js`.

## Current Site Categories

- Mobile Apps: production mobile applications listed under the `mobileApps` collection.
- Other Projects: websites, developer tools, open-source work, pub.dev packages, and other non-mobile-app projects listed under the `otherProjects` collection.

## Included Projects

| Status | Project | Category | Featured | Store / Source |
| --- | --- | --- | --- | --- |
| Added | Hindavi Graphics | Mobile Apps | Yes | Play Store, App Store |
| Added | SwipeLoan | Mobile Apps | Yes | Play Store |
| Added | Creatoo | Mobile Apps | Yes | Play Store, App Store |
| Added | Soyra Maratha | Mobile Apps | Yes | Play Store, App Store, Web |
| Added | Pune Water Helpline - Customer | Mobile Apps | No | Play Store |
| Added | Pune Water Helpline - Vendor | Mobile Apps | No | — |
| Added | Pune Water Helpline - Delivery | Mobile Apps | No | — |
| Added | Gripon Bharat | Mobile Apps | Yes | Play Store, App Store |
| Added | Relief Plus | Mobile Apps | No | Play Store |
| Added | DiabRevive AI | Mobile Apps | No | Play Store, App Store |
| Added | SMATON User App | Mobile Apps | No | Play Store |
| Added | SMATON Restaurant | Mobile Apps | No | Play Store |
| Added | SMATON Delivery | Mobile Apps | No | Play Store |
| Added | Equine LTS CozyCheck | Mobile Apps | Yes | Play Store |
| Added | E-Prashikshan | Mobile Apps | No | Play Store |
| Added | ScoreLoan | Mobile Apps | Yes | Play Store, Website; App Store pending |
| Added | HG Smart Connect | Mobile Apps | No | Internal Android app |
| Added | Artist Wall | Mobile Apps | No | Play Store |
| Added | FML | Mobile Apps | No | Play Store |
| Added | Portfolio Website | Other Projects | No | GitHub |
| Added | Flutter DevOps Kit | Other Projects | No | pub.dev, GitHub |
| Commented | Shiv World Travel | Mobile Apps | No | Play Store |
| Commented | Red Riksha | Mobile Apps | No | Play Store |

## Pending / Yet To Add

Add future project candidates here before they are implemented in the portfolio.

| Status | Project | Target Category | Notes / Links |
| --- | --- | --- | --- |
| Skipped | Matka King  | Mobile Apps |  |
| Skipped | Prime Hub  | Mobile Apps |  |
| Skipped | Riya777  | Mobile Apps |  |
| Skipped | MyMatka  | Mobile Apps |  |

## Future Design Improvements

Use this section as the design roadmap for the next portfolio polish pass.

| Priority | Improvement | Notes |
| --- | --- | --- |
| High | Add project impact proof | Add outcomes and proof points to project cards, such as production launch, store availability, integrations, and role. |
| High | Improve project modal layout | Structure detail popups into Overview, Role, Key Work, Tech Stack, and Links instead of a simple paragraph layout. |
| High | Add project domain badges | Add scan-friendly labels like Fintech, Healthcare, IoT, Delivery, Travel, Community, Tools, and Web. |
| Medium | Make Skills more senior | Consider replacing percentage circles with grouped capability cards for Mobile Development, Architecture, Integrations, and Tools. |
| Medium | Add selected capabilities band | Add a compact section for Payments, BLE/IoT, Firebase, Maps, Store Publishing, and Clean Architecture. |
| Medium | Strengthen hero proof | Add compact proof chips near the hero CTA, such as 14+ Apps, Play Store + App Store, Flutter, IoT/BLE, and Payments. |
| Medium | Refine section separation | Improve visual rhythm between Projects, Skills, and Contact with more distinct spacing, depth, or subtle dividers. |
| Medium | Improve Contact closing CTA | Make Contact feel like a premium final CTA for Flutter/mobile app work, with tighter copy and a lighter visual layout. |
| Low | Refine navbar active state | Consider a smoother active indicator or underline that matches the section order. |
| Low | Reduce repeated gradient usage | Keep purple/blue gradients mostly for CTAs, active states, and key accents for a more controlled visual system. |

## Review Checklist

- Every project in the Included Projects table exists in `src/constants/portfolioData.js`.
- Every project in `src/constants/portfolioData.js` is listed in this file.
- Mobile apps belong under `mobileApps`.
- Websites, packages, tools, and non-mobile work belong under `otherProjects`.
- Featured values match the `featured` flag in `src/constants/portfolioData.js`.
- Internal projects are clearly identified and do not expose unavailable store links.
