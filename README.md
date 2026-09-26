# BEST Design Days 2025 website (archived edition)

Static archive of the BEST Design Days site in the design it had from 2022 to 2025, frozen with the 2025 edition's content: a one-page site (`index.html`) and a gallery page (`galerija.html`), plain HTML, CSS and JavaScript with the content in JSON under `data/`. It was replaced by the 2026 redesign and is kept here as it was on its last day at designdays.best.hr. There is no build step and nothing to keep patched.

Home: **https://2025.designdays.best.hr/** (the site ran at **designdays.best.hr**)

- Taken from [BEST-Design-Days-Web](https://github.com/BEST-Zagreb/BEST-Design-Days-Web) at commit `87230cb` (2026-09-19), the last commit before the redesign; that repository's history, 121 commits from 2022-03-31, is the record of how this design was built
- Verified: both pages rendered in a browser at desktop and phone width, **0 console errors, 0 failed requests, 0 broken images**

## Looking at it locally

    python -m http.server 8000

Then open <http://127.0.0.1:8000/>. The pages load their content with `fetch`, so opening the file directly does not work; any static file server does.

## What deliberately differs from the 2025 site

### Personal contact details

In `data/*/organizacijskiTim.json`, 22 organisers' e-mail addresses were replaced with the project's role address **designdays@best.hr** and 14 phone numbers were removed, across all four years of data. Names stay. The contact cards on the page show the project address and "Tel: /". This archive is public and outlives the students named in it.

### Everything else

Nothing. The HTML, CSS, JavaScript, images and the rest of the data are byte-for-byte the files served in 2025. The old `README.md` and `wrangler.jsonc` described the live site and are replaced by the archive's own. `data/2022` to `data/2024` are included because they were part of the site's files, although the pages only show 2025.

## Known quirks

The tree holds 31 pairs of paths that differ only in letter case (for example `fonts/Roboto-Bold.woff` and `fonts/roboto-bold.woff`, `img/BDD-background.png` and `img/bdd-background.png`). 30 pairs are identical files; one pair of 2024 lecturer photos differs and is not used by the pages. They are kept as they were. On Windows and macOS, which ignore case, a checkout holds only one file of each pair; that changes nothing for the pages.

## Hosting

Live at <https://2025.designdays.best.hr/>, served by Cloudflare Workers as static files straight from this repository. Every push to `main` is deployed by Workers Builds within a minute or two. Every response carries a `noindex` header, added at the edge by `banner.js`, so search engines keep sending people to the current site; the archived files themselves are untouched. Unlike the other archives, the pages show no archive notice.

## Editions

BEST Design Days on the web: 2022 to 2025 in this design (this repository, 2025 content), 2026 onward at [designdays.best.hr](https://designdays.best.hr/) ([BEST-Design-Days-Web](https://github.com/BEST-Zagreb/BEST-Design-Days-Web)).

## Wayback Machine

This edition ran at <https://designdays.best.hr/>. The Internet Archive's calendar for the address is <https://web.archive.org/web/*/https://designdays.best.hr/*>; checked on 2026-09-11, captures run from 2022-07-23 to at least 2025-09-28. This repository is the complete copy; the archive is a partial, independent second copy.

## Licence

The content, images and copy belong to BEST Zagreb. Fonts and the libraries under `css/libraries/` and `js/libraries/` remain under their own licences.
