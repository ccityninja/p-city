# P/CITY — The Christchurch Meth Files

A static, no-JavaScript-required dossier site built from the verified
Christchurch methamphetamine register (1982–2026). Twelve chapters, 78 case
records, 40 carried-forward archive files, 57 cited sources, 34 judgment
paragraphs quoted verbatim on the labs page.

**Presentation:** true-crime case-file aesthetic — condensed poster type, black
/ bone / blood-red palette, chapter numbering, evidence stamps, redaction
plates instead of photographs. No stock imagery, no dramatised dialogue, no
invented scenes.

## Open it

```
xdg-open index.html
```

Any static host works. No build step, no server, no external requests
(fonts are self-hosted woff2, no CDN, no analytics, no tracking).

## What is on the site

| Page | Contents |
|---|---|
| `index.html` | Hero, read-first warning, 12 chapter cards with status meters, tally |
| `chapters/*.html` | One chapter per investigation: cold open, evidence stamps, record note, dossier cards, outcome table, documented connections, prev/next |
| `players.html` | All 78 case records; client-side search + legal-position filter |
| `timeline.html` | Chapter chronology 1982 → 2026 |
| `sentences.html` | The sentence shift: every source-supported term plotted by chapter, with era medians and a caveat block |
| `labs.html` | The labs, in the judgments: every laboratory address named in the Granite sentencing notes and the Court of Appeal judgment, quoted paragraph by paragraph, plus the addresses the record leaves blank |
| `archive.html` | The original 40-case laboratory archive, unedited (accordion) |
| `sources.html` | Source register 1–57, deep-linked from every citation chip |
| `method.html` | Rules, identity traps, corrections, open items |

## Editorial rules baked into the build

1. A charge is not a conviction; a guilty plea is not a sentence; a scheduled
   hearing is not an outcome.
2. Acquittals are printed wherever they exist, including inside split verdicts.
3. Missing outcomes are recorded as missing — never inferred.
4. Every number in a hand-written passage is asserted against the register
   corpus at build time (`scripts/build_site.py`, `guard()`); the build fails if
   a number is not sourced.
5. Conflicting reports are shown side by side (Whoosh courier terms) rather than
   resolved by preference.

## Rebuild

```
python3 scripts/build_site.py
```

Reads `recovery-register.json` (in the workspace root) and the untouched
original archive HTML, writes the whole `site/` tree. Deterministic output.

## Structure

```
site/
  index.html
  players.html  timeline.html  sentences.html  labs.html  archive.html  sources.html  method.html
  chapters/01-airport-job.html … 12-the-streets.html
  assets/style.css  app.js  favicon.svg
  assets/fonts/BebasNeue-400.woff2  Oswald-400.woff2
```

## Notes

- The site is a presentation layer only. It cites the register; it does not add
  new findings.
- Not affiliated with, or derived from, any television production.
- Compiled 10 November 2026. Present-day cutoff for the underlying record:
  9 November 2026.
