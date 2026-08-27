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

- [x] `car` — a few cars across different types (sedan, SUV, hatchback,
      truck, etc.)
- [x] `listing` — sale + rental listings tied to those cars
- [x] `record` — car history entries (service, repair, accident, ownership
      transfer) — this is the "digital passport" differentiator
- [x] `manufacturer` — a few manufacturer profiles
- [x] `dealership` — a few dealerships
- [x] `salesperson` — a few salespeople, linked to dealerships
- [x] `request` — a few buyer/renter requests
- [x] `user` — public profile view
- [x] `comment` — comments/reviews on a few entities

### Components per entity (`*-view`, `*-short`, `*-icon`, `*-form`)

- [x] car: view, short, icon, form
- [x] listing: view, short, icon, form
- [x] record: view, short, form (no icon per README)
- [x] manufacturer: view, short, icon, form
- [x] dealership: view, short, icon, form
- [x] salesperson: view, short, icon, form
- [x] request: view, short, icon, form
- [x] user: view, short, icon, form
- [x] comment: comments-view, comment-short, comment-form

### Pages

- [x] Feed — scrollable feed, swipe left/right (favourite/ignore)
      against local static state
- [x] Explore — search/filter UI against the static dataset
- [x] Map — pins for entities, static coordinates in fixtures
- [x] Editor — forms render and validate, no persistence
- [x] car — dedicated detail page (replaces generic Entity page)
- [x] listing — dedicated detail page
- [x] records — dedicated detail page
- [x] manufacturer — dedicated detail page
- [x] dealership — dedicated detail page
- [x] salesperson — dedicated detail page
- [x] client — dedicated detail page (replaces generic user-facing Entity view)

Removed: Sign, Workspace (already covered by existing template pages),
Investment (not needed yet). Workspace's role is replaced by Explore.
Entity (generic) is replaced by one dedicated page per entity type.

Note: `request` and `comment` entities have no dedicated page — they only
appear embedded inside other pages/entities (e.g. comments on an entity
page, requests inside Feed/Explore). `user`'s dedicated page is named
`client` to avoid confusion with the auth/account user.

## Page access matrix

Reflects the actual route guards in `app.routes.ts` / `pages/vinhub/vinhub.routes.ts`
today. The demo has no real role system yet (see "Explicitly out of scope"
below) — **Client** and **Agent** are both just "any authenticated user"
right now, since there's no guard or data model distinguishing a buyer from
a salesperson/dealer account. This table is here to make that gap visible,
not to claim a distinction that doesn't exist in code yet.

| Page                                  | Unauthorized | Client | Agent |
| ------------------------------------- | :----------: | :----: | :---: |
| Landing (`/`)                         |      ✅      |   ✅   |  ✅   |
| Sign in (`/sign`)                     |      ✅      |   ❌   |  ❌   |
| Feed (`/feed`)                        |      ✅      |   ✅   |  ✅   |
| Explore (`/explore`)                  |      ✅      |   ✅   |  ✅   |
| Map (`/map`)                          |      ✅      |   ✅   |  ✅   |
| Car (`/car/:id`)                      |      ✅      |   ✅   |  ✅   |
| Listing (`/listing/:id`)              |      ✅      |   ✅   |  ✅   |
| Digital passport (`/records/:carId`)  |      ✅      |   ✅   |  ✅   |
| Manufacturer (`/manufacturer/:id`)    |      ✅      |   ✅   |  ✅   |
| Dealership (`/dealership/:id`)        |      ✅      |   ✅   |  ✅   |
| Salesperson (`/salesperson/:id`)      |      ✅      |   ✅   |  ✅   |
| Client profile (`/client/:id`)        |      ✅      |   ✅   |  ✅   |
| Editor (`/editor`)                    |      ❌      |   ✅   |  ✅   |
| My profile (`/profile`)               |      ❌      |   ✅   |  ✅   |
| Settings (`/settings`)                |      ❌      |   ✅   |  ✅   |
| Admin: Users (`/admin/users`)         |      ❌      |   ❌   |  ❌   |
| Admin: Clients (`/admin/clients`)     |      ❌      |   ❌   |  ❌   |
| Admin: Forms (`/admin/forms`)         |      ❌      |   ❌   |  ❌   |

Admin pages are gated by a separate `adminsGuard` (platform staff), which is
distinct from both Client and Agent — neither can see them under the current
guard setup.

### Explicitly out of scope for this demo

- Real backend/database/API
- Real CRUD / persistence
- Business-profile claiming
- Enforced visibility/permission logic (can show badges without enforcing)
- Verification, moderation, monetization
