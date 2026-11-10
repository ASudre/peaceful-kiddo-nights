# Blog publishing plan

Order is by search demand and intent: questions parents type most come first.
Publishing rhythm: Tuesday and Friday.

| # | Date | Article (file in `content/blog/`) | Status |
|---|------|-----------------------------------|--------|
| 1 | 2026-11-10 | `bebe-se-reveille-la-nuit` | Published |
| 2 | 2026-11-13 | `a-quel-age-bebe-fait-ses-nuits` | Draft, awaiting Nathalie's review |
| 3 | 2026-11-17 | `regression-sommeil-4-mois` | Draft, awaiting review |
| 4 | 2026-11-20 | `bebe-refuse-la-sieste` | Draft, awaiting review |
| 5 | 2026-11-24 | `bebe-ne-sendort-quau-sein-ou-au-biberon` | Draft, awaiting review |
| 6 | 2026-11-27 | `angoisse-de-separation-et-nuits-difficiles` | Draft, awaiting review |
| 7 | 2026-12-01 | `sevrage-tetee-biberon-de-nuit` | Draft, awaiting review (sensitive: confirm ages) |
| 8 | 2026-12-04 | `dormir-sans-pleurs-methodes-douces` | Draft, awaiting review |

## How scheduling works

- A post is published when `draft` is not `true` **and** its `date` is today or earlier.
- A GitHub Actions job rebuilds the site every day at 06:00 UTC, so a reviewed post goes live on its `date` with no manual push.
- To approve an article: remove the `draft: true` line (or set it to `false`) and push. It stays hidden until its `date`.
- If a review slips past the planned date, the article goes live as soon as `draft` is removed and pushed (the date is then in the past). Update `date:` to the real publication day.

## After each article goes live

1. Search Console: URL Inspection, then "Demander l'indexation".
2. Bing Webmaster Tools: URL submission.
3. Post it on the Google Business Profile.
4. Share it where parents are (groups, Instagram, LinkedIn).
