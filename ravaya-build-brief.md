# RAVAYA — filled build brief (pairs with template-to-yours-v2.md)

Paste this file ALONGSIDE template-to-yours-v2.md into your coding agent. This file fills the
INPUTS block for this specific build and adds Ravaya-only decisions; v2 still governs every
mechanic (Design Seed, Premium-Feel Gate, Part F enforcement loop, Store Module).

## INPUTS (filled)
```
[TEMPLATE_PATH]     = none — build from scratch (no export to convert)
[SITE_TYPE]         = store (ecommerce)
[NICHE]             = stitched & unstitched clothing / fabric (South Asian fashion retail)
[FRAMEWORK]         = Next.js (App Router) + Tailwind CSS. products.json for now; swap to a
                      headless CMS (Sanity/Shopify) once catalog exceeds ~50 SKUs.
[BUSINESS_NAME]     = Ravaya
[SHORT_NAME]        = Ravaya
[TAGLINE]           = "Crafted for Your Everyday Elegance"
[EMAIL]             = hello@ravaya.com — if that domain is unavailable, fall back to
                      hello@shopravaya.com and use the same domain consistently in every place
                      the email appears (footer, contact page, order-confirmation copy).
[PHONE_DISPLAY]     = +92 316 0069164 (default, per standing instruction)
[PHONE_TEL]         = +923160069164
[WHATSAPP_NUMBER]   = 923160069164
[BOOKING_URL]       = n/a (store, not appointment-based) — omit booking CTA, use "Shop now" /
                      "Add to cart" as the primary CTA verbs instead
[CREDIT]            = none — skip the footer maker-credit line entirely
[CURRENCY]          = PKR
[PRICE_RANGE]       = Unstitched: PKR 2,000–8,000 | Stitched: PKR 4,000–15,000+
[PAYMENT]           = Both: Cash on Delivery AND online payment. Online gateway to be selected
                      separately (a Pakistan-market gateway such as JazzCash/Easypaisa, or Stripe
                      if the business later operates internationally) — build the checkout UI to
                      support both payment types now, wire the actual processor once one is chosen.
[IMAGE_TOOL]        = Antigravity's built-in image model — see the RAVAYA IMAGE ADDENDUM below,
                      this niche cannot ship with obviously-synthetic-looking photography.
[DEPLOY_TARGET]     = Vercel
[GITHUB_OWNER]      = to be provided — do not push until credentials/repo access are supplied
[REPO_VISIBILITY]   = private
[DESIGN_SEED]       = Ravaya + build date → see "Seed choices" below (logged, not re-rolled
                      arbitrarily — if you regenerate this build later, keep these same choices
                      unless the brand direction changes)
```

## Seed choices (logged per v2 Part 0 — this is what makes Ravaya look like Ravaya, not a template)
- **Layout archetype**: #8 Product-forward grid as the structural base, with editorial full-bleed
  lifestyle breaks inserted every 2-3 product rows (per the earlier conversion blueprint) — pure
  grid-only reads like a catalog PDF; the editorial breaks are what make it feel premium.
- **Palette**: near-black ink (`#0d0f10`-ish, not pure black) + warm gold accent (luxury/editorial
  palette #3), with a soft warm-white background (`#faf8f5`-ish) rather than stark white — this
  suits "premium South Asian fashion" far better than a bright/candy palette, and lets the fabric
  photography itself carry color instead of competing with loud UI chrome.
- **Type pairing**: #1 — serif display (e.g. Fraunces or Playfair) for headings/product names +
  clean grotesk body (e.g. Inter or Public Sans) for everything functional (filters, prices, cart).
  Run v2's Part F1 optical-size calibration on this pairing specifically before locking the scale —
  serif display fonts are exactly the case where cap-height mismatches against a grotesk body if
  left uncalibrated.
- **Motion**: #1 — fade + slide-up reveals, 0.6-0.9s ease-out. Nothing flashier; let photography and
  whitespace do the "feels premium" work, not motion.

## Category coverage (full, from launch — not staged)
Build out all four occasion categories now, each as its own filterable collection and a homepage
tile: **Casual**, **Festive**, **Bridal**, **Formal**. Within each: unstitched and stitched
sub-filters, plus the fabric-type filter (Lawn/Chiffon/Khaddar/Cotton/Silk/Organza) from the
product schema in the earlier conversion blueprint. Bridal in particular should get slightly richer
PDP treatment (larger gallery, closer embroidery macro shots) since it's a higher-consideration,
higher-price purchase than casual lawn.

## RAVAYA IMAGE ADDENDUM (overrides v2's generic imagery step for this build)
Antigravity's own image model is the tool — but for fashion/fabric, "technically an image" isn't
the bar; the bar is "doesn't look AI-generated at a glance," since uncanny skin/hands/fabric drape
is the fastest way to torch trust on a clothing site. For every generated image:
- Prompt for realistic studio or editorial-lifestyle photography, natural fabric drape and folds,
  accurate print/embroidery detail, natural skin texture and proportions, soft directional
  lighting — not glossy/plastic rendering, not the "AI sheen" look.
- Explicitly prompt against common AI-image failure points for this subject: no extra/fused
  fingers, no warped or asymmetric embroidery patterns, no melted or repeating print motifs, no
  waxy/over-smoothed skin, no inconsistent shadow direction between the model and background.
- Keep one consistent style suffix across the whole catalog (matching lighting/grading) so products
  look like one coherent brand shoot, not photos from different sources.
- Generate the four shot types from the earlier blueprint per product: flat-lay, fabric close-up,
  styled-on-model, back view — with models reflecting the actual regional/cultural context of a
  South Asian fashion brand rather than a generic Western fashion-stock look.
- Run a manual visual spot-check on the first batch (5-10 products) before generating the full
  catalog at scale — catch a systemic issue (e.g. a recurring hand/drape artifact) once, not 50 times.
- If any generated image fails the spot-check, regenerate with a tightened prompt rather than
  shipping it "close enough" — a single uncanny product photo undermines trust in the whole catalog.

## Deploy note
Do not run the GitHub push or Vercel deploy steps until GitHub owner/repo access is actually
provided. Build, run the full Part F enforcement loop, and get the site to a locally-verified,
passing state first; deploy is the last step once credentials are in hand.

## What's still open (fill in when ready, not blocking the build)
- Final choice of online payment gateway (affects checkout integration code, not layout/design)
- GitHub username/repo name for the private repo
