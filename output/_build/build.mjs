// Assemble tailored CV + cover-letter HTML for each role, then render PDFs
// via the repo's generate-pdf.mjs. Run from repo root: node output/_build/build.mjs
import { readFile, writeFile } from 'fs/promises';
import { execFileSync } from 'child_process';
import { roles, shared } from './roles.mjs';
import { style } from './role-style.mjs';

const ROOT = new URL('../../', import.meta.url).pathname;
const cvTemplate = await readFile(`${ROOT}output/_build/cv-template-match.html`, 'utf8');
const coverTemplate = await readFile(`${ROOT}output/_build/cover-template.html`, 'utf8');

const NAME = 'Husam Ahmed';
const EMAIL = 'husamdaifalla01@gmail.com';
const PHONE = '(647) 685-6908';
const LOCATION = 'Ottawa, ON';
const DATE = 'June 11, 2026';

const esc = (s) => s; // content is authored HTML-safe

// Two-page CV format: mild compaction only (keeps stock template rhythm)
const COMPACT_CSS = `
  .header { margin-bottom: 14px; }
  .section { margin-bottom: 14px; }
  .job { margin-bottom: 11px; }
  .job li { line-height: 1.5; margin-bottom: 3px; }
</style>`;

const jobHtml = (j) => `
  <div class="job">
    <div class="job-header">
      <div class="job-title">${j.role}</div>
      <div class="job-period">${j.period}</div>
    </div>
    <div class="job-company">${j.company} <span class="loc">/ ${j.location}</span>${j.note ? ` <span class="note">(${j.note})</span>` : ''}</div>
    <ul>${j.bullets.map((b) => `<li>${b}</li>`).join('\n')}</ul>
  </div>`;

const EDUCATION_HTML = `
  <div class="edu-item">
    <div class="edu-header"><div class="edu-title">Bachelor of Science, Biology</div><div class="edu-year">Sep 2020 to Dec 2024</div></div>
    <div class="edu-org">University of Ottawa / Ottawa, ON</div>
    <ul>
      <li>Structured data collection and documentation in microbiology coursework (sample handling, protocol adherence, results logging).</li>
      <li>Quantitative and statistical analysis of laboratory datasets in Excel; technical lab reports summarizing methods, results, and limitations.</li>
    </ul>
  </div>
  <div class="edu-item">
    <div class="edu-header"><div class="edu-title">Google Data Analytics Professional Certificate</div><div class="edu-year">In progress</div></div>
    <div class="edu-org">Coursera</div>
  </div>`;

const LANGUAGES_HTML = `
  <div class="lang-line"><b>English</b><span class="dot">&middot;</span>Native</div>
  <div class="lang-line"><b>Arabic</b><span class="dot">&middot;</span>Native</div>
  <div class="lang-line"><b>French</b><span class="dot">&middot;</span>Working knowledge</div>`;

for (const r of roles) {
  // ---- CV ----
  const st = style[r.slug];
  const sep = '<span class="sep">&bull;</span>';
  const dot = '<span class="sep">&bull;</span>';
  let cv = cvTemplate
    .replaceAll('{{NAME}}', NAME)
    .replaceAll('{{TAGLINE}}', st.tagline.join(sep))
    .replaceAll('{{CONTACT}}', [LOCATION, EMAIL, PHONE].join('<span class="sep">&middot;</span>'.replace('sep', 'sep')))
    .replaceAll('{{SUMMARY}}', r.summary)
    .replaceAll('{{CORE_SKILLS}}', st.coreSkills.map(([label, items]) => `<div class="skill-line"><b>${label}</b><span class="dot">&middot;</span>${items}</div>`).join('\n'))
    .replaceAll('{{EXPERIENCE}}', r.jobs.map(jobHtml).join('\n'))
    .replaceAll('{{EDUCATION}}', EDUCATION_HTML)
    .replaceAll('{{LANGUAGES}}', LANGUAGES_HTML);

  const cvHtml = `${ROOT}output/_${r.slug}-cv.html`;
  await writeFile(cvHtml, cv);

  // ---- Cover letter ----
  const cover = coverTemplate
    .replaceAll('{{NAME}}', NAME)
    .replaceAll('{{CONTACT}}', `<span>${PHONE}</span><span class="separator">|</span><span>${EMAIL}</span><span class="separator">|</span><span>${LOCATION}</span>`)
    .replaceAll('{{DATE}}', DATE)
    .replaceAll('{{RECIPIENT}}', r.recipient)
    .replaceAll('{{RE_LINE}}', r.reLine)
    .replaceAll('{{BODY}}', r.letter.map((p) => `<p>${p}</p>`).join('\n'))
    .replaceAll(`'../../fonts/`, `'../fonts/`);

  const coverHtml = `${ROOT}output/_${r.slug}-cover.html`;
  await writeFile(coverHtml, cover);

  // ---- Render ----
  for (const [input, output] of [
    [cvHtml, `${ROOT}output/${r.company}-${r.roleName}-CV.pdf`],
    [coverHtml, `${ROOT}output/${r.company}-${r.roleName}-Cover.pdf`],
  ]) {
    const out = execFileSync('node', [`${ROOT}generate-pdf.mjs`, input, output, '--format=letter'], { encoding: 'utf8' });
    const pages = out.match(/pages?:?\s*(\d+)/i)?.[1] ?? '?';
    console.log(`${output.split('/').pop()}  pages=${pages}`);
  }
}
console.log('done');
