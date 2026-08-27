# Vinhub Roadmap

Status: APPROVED. Scope: static investor-facing demo only. Nothing beyond
this is planned yet.

Current repo state: fresh `ngx-prime-default` Angular template. Auth /
dashboard / profile / settings pages from the template are used as-is —
no changes there.

Goal: make the product vision navigable and demoable for investors. No
backend, no persistence beyond local/static state — but content must be
real and realistic, not dummy/lorem-ipsum. All static content lives as JSON
files under `src/data/` (following the existing `src/data/company` pattern),
one dataset per entity type, loaded by services/components — not hardcoded
in components.

## Decide: which of these go in the demo?

### Entities (static JSON data, realistic content)

- [ ] `car` — a few cars across different types (sedan, SUV, hatchback,
      truck, etc.)
- [ ] `listing` — sale + rental listings tied to those cars
- [ ] `record` — car history entries (service, repair, accident, ownership
      transfer) — this is the "digital passport" differentiator
- [ ] `manufacturer` — a few manufacturer profiles
- [ ] `dealership` — a few dealerships
- [ ] `salesperson` — a few salespeople, linked to dealerships
- [ ] `request` — a few buyer/renter requests
- [ ] `user` — public profile view
- [ ] `comment` — comments/reviews on a few entities

### Components per entity (`*-view`, `*-short`, `*-icon`, `*-form`)

- [ ] car: view, short, icon, form
- [ ] listing: view, short, icon, form
- [ ] record: view, short, form (no icon per README)
- [ ] manufacturer: view, short, icon, form
- [ ] dealership: view, short, icon, form
- [ ] salesperson: view, short, icon, form
- [ ] request: view, short, icon, form
- [ ] user: view, short, icon, form
- [ ] comment: comments-view, comment-short, comment-form

### Pages

- [ ] Feed — scrollable feed, swipe left/right (favourite/ignore)
      against local static state
- [ ] Explore — search/filter UI against the static dataset
- [ ] Map — pins for entities, static coordinates in fixtures
- [ ] Editor — forms render and validate, no persistence
- [ ] car — dedicated detail page (replaces generic Entity page)
- [ ] listing — dedicated detail page
- [ ] records — dedicated detail page
- [ ] manufacturer — dedicated detail page
- [ ] dealership — dedicated detail page
- [ ] salesperson — dedicated detail page
- [ ] client — dedicated detail page (replaces generic user-facing Entity view)

Removed: Sign, Workspace (already covered by existing template pages),
Investment (not needed yet). Workspace's role is replaced by Explore.
Entity (generic) is replaced by one dedicated page per entity type.

Note: `request` and `comment` entities have no dedicated page — they only
appear embedded inside other pages/entities (e.g. comments on an entity
page, requests inside Feed/Explore). `user`'s dedicated page is named
`client` to avoid confusion with the auth/account user.

### Explicitly out of scope for this demo

- Real backend/database/API
- Real CRUD / persistence
- Business-profile claiming
- Enforced visibility/permission logic (can show badges without enforcing)
- Verification, moderation, monetization
