# Materials Audit — 2026-06-11

Scope: the two uploaded CV PDFs (`HusamAhmedCV.pdf` = older variant, `Husam_Ahmed__CV.pdf` =
newer variant). `output/` is empty in this repo, so no generated materials existed to audit.
CDA-AMC staged materials are NOT in the repo — audit them against the honesty rules below
before submission.

## Verdict summary

The newer CV is strong, honest, and federal-ready. It needs **no rewrite** — it needs
**per-archetype variants** and four surgical fixes.

## ATS pass-check (Gate 1 mechanics)

| Check | Status | Fix |
|-------|--------|-----|
| Single-column body | ⚠️ Education/Languages render side-by-side at the bottom | Use single-column layout in ATS variants (the career-ops template is single-column — generate from cv.md) |
| Special characters | ⚠️ "β-glucuronidase" Greek char can garble in ATS parsers | Write "beta-glucuronidase" in ATS variants |
| En-dashes in ranges ("30–40%") | OK via generate-pdf.mjs normalization | Avoid in hand-built PDFs |
| Contact info parseable | ✅ plain text line | — |
| Knockout data present | ✅ clearance, languages, location all stated | — |
| Dates format | ✅ "Aug 2024 to Present" parses | — |

## Tenure-pattern check (Gate 2)

The CV shows **three overlapping date ranges in 2024** (Rogers May 2021–Aug 2024, Stelis
Nov 2023–present, IRCC Aug 2024–present) with no explicit concurrency cue. A 6-second scan can
misread this as churn. **Fix: one-line cue** ("held concurrently with...") on each concurrent
entry — already added in canonical `cv.md`; carry into every PDF variant.

## 6-second scan path, per archetype

- **Federal PM/AS + contractors:** PASSES. Headline says "Federal Government Experience |
  Active Reliability Status"; most recent title is IRCC with classification. No change.
- **Identity/fraud (private):** FAILS as-is. "Program Assistant (CR-04, Acting PM-01)" means
  nothing to a fintech recruiter, and the word **"fraud" appears nowhere on the CV** — he is
  invisible to the standard fraud-analyst Boolean. Variant needs: headline "Identity & Fraud
  Operations | Biometrics & Entity Resolution | KYC", and top bullets in destination vocabulary
  (IDV, entity resolution, false-positive triage). ⚠️ ASK HUSAM before adding the word "fraud"
  to any bullet: only truthful if his identity-discrepancy/breach casework genuinely includes
  fraud-indicator handling. If not, the truthful term is "identity discrepancy investigation".
- **Data/BI analyst:** PARTIAL. Power BI is in the summary but below the first-third fold on
  some renders; variant should lead the summary with the Power BI/Excel work and the exact
  phrase "data analysis". "SQL" is truthfully absent — accept the Gate-1 hit on SQL-required
  JDs until the Google cert's SQL module is done (then add "SQL (Google Data Analytics)").
- **Regulatory/compliance:** PASSES (SOP authorship, change log, GCDWQ/O.Reg citations all
  present and specific).

## Boolean-surfacing check

| Archetype Boolean | Surfaces? | Gap |
|---|---|---|
| `("program officer" OR "case processing") AND GCMS AND "briefing notes"` | ✅ | — |
| `("fraud analyst" OR "identity verification") AND (biometric OR KYC)` | ⚠️ partial | "fraud" absent (see above); "identity verification" present in skills only — push into a bullet |
| `"data analyst" AND "Power BI"` | ⚠️ partial | "Power BI" ✅; exact phrase "data analyst" absent (only "Data Analysis") — LinkedIn headline should carry "Data Analyst" |
| `("compliance analyst" OR "regulatory analyst") AND (SOP OR "drinking water")` | ✅ | — |
| LinkedIn surfacing | ❓ UNKNOWN | No LinkedIn URL on CV or in profile.yml — **blocker for recruiter-side surfacing; Husam must supply/update it** |

## Honesty audit

- ✅ Newer CV: no overclaims found. Claims are specific, scoped, and phone-screen defensible.
- ⚠️ Older CV says "Eligible for Security Clearance" — vague enough to be read as
  Secret-eligible. **Retire the older variant**; the newer "Active Reliability Status" is both
  stronger and exact.
- 🚫 Never claim: Secret clearance, tested French profile (BBB), EC education standard met,
  systematic review/PRISMA/GRADE, SQL/Python, pharmaceutical regulatory scope (Stelis is
  environmental/water — do not let "regulatory affairs" drift toward pharma in cover letters).
- ⚠️ Personal AI builds (verdict, curious-brain): not citable until URLs/scope confirmed.
  Interview-conversation signal only.

## Action list for Husam

1. Provide LinkedIn URL + set headline to carry "Data Analyst | Power BI" and "Identity
   Verification" exact phrases (config/profile.yml TODO).
2. Confirm whether "fraud" is truthful vocabulary for the IRCC casework.
3. Confirm verdict/curious-brain repo URLs + one-line scope (cv.md TODO).
4. Retire the older CV PDF everywhere it's still in circulation.
5. When the Google cert's SQL module completes, add SQL to skills and re-run this audit.
