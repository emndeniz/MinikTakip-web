@AGENTS.md

# Web — MinikTakip

Public marketing + legal pages site for MinikTakip (Next.js App Router, deployed on Vercel,
domain `miniktakip.app`). No code repo of its own previously handled this — legal URLs used to
live on `emndeniz/miniktakip-legal` (GitHub Pages, interim per `Release_Blockers.md` RB-07);
this repo replaces that.

Product and legal context lives in the sibling `MinikTakip-Doc` repo (`tasks/Ops_Tasks.md`
`OPS-021`, `tasks/Release_Blockers.md` RB-06/RB-07, `07-kvkk-uyum-notlari.md`) — read it before
changing legal page content or the URL/versioning scheme. Each legal text is a versioned route
(`/privacy/v1`, `/terms/v1`, `/kvkk/v1`) — a version is never edited in place once published,
because the consent record (`BE-032` in `MinikTakip-backend`) stores which version a user
accepted. `/latest` redirects to the current version via `next.config.ts`.
