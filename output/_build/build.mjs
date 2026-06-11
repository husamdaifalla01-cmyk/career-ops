// Assemble tailored CV + cover-letter HTML for each role, then render PDFs
// via the repo's generate-pdf.mjs. Run from repo root: node output/_build/build.mjs
import { readFile, writeFile } from 'fs/promises';
import { execFileSync } from 'child_process';
import { roles, shared } from './roles.mjs';

const ROOT = new URL('../../', import.meta.url).pathname;
const cvTemplate = await readFile(`${ROOT}templates/cv-template.html`, 'utf8');
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
      <div class="job-company">${j.company}</div>
      <div class="job-period">${j.period}</div>
    </div>
    <div class="job-role">${j.role} <span class="job-location">/ ${j.location}</span>${j.note ? ` <span class="job-location">(${j.note})</span>` : ''}</div>
    <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('\n')}</ul>
  </div>`;

for (const r of roles) {
  // ---- CV ----
  let cv = cvTemplate
    .replaceAll('{{LANG}}', 'en')
    .replaceAll('{{PAGE_WIDTH}}', '8.5in')
    .replaceAll('{{NAME}}', NAME)
    .replaceAll('{{PHONE}}', PHONE)
    .replaceAll('{{EMAIL}}', EMAIL)
    .replaceAll('{{LOCATION}}', `${LOCATION} | Active Reliability Status`)
    .replaceAll('{{SECTION_SUMMARY}}', 'Professional Summary')
    .replaceAll('{{SUMMARY_TEXT}}', r.summary)
    .replaceAll('{{SECTION_COMPETENCIES}}', 'Core Competencies')
    .replaceAll('{{COMPETENCIES}}', r.competencies.map((c) => `<span class="competency-tag">${c}</span>`).join('\n'))
    .replaceAll('{{SECTION_EXPERIENCE}}', 'Work Experience')
    .replaceAll('{{EXPERIENCE}}', r.jobs.map(jobHtml).join('\n'))
    .replaceAll('{{SECTION_EDUCATION}}', 'Education')
    .replaceAll('{{EDUCATION}}', shared.EDU_BASE)
    .replaceAll('{{SECTION_CERTIFICATIONS}}', 'Certifications')
    .replaceAll('{{CERTIFICATIONS}}', shared.CERTS)
    .replaceAll('{{SECTION_SKILLS}}', 'Skills')
    .replaceAll('{{SKILLS}}', `<div class="skills-grid">${r.skills.join('\n')}</div>`)
    .replaceAll(`'./fonts/`, `'../fonts/`)
    .replace('</style>', COMPACT_CSS);

  // No LinkedIn/portfolio on file: remove their spans and separators
  cv = cv
    .replace(/<span class="separator">\|<\/span>\s*<a href="{{LINKEDIN_URL}}">{{LINKEDIN_DISPLAY}}<\/a>/, '')
    .replace(/<span class="separator">\|<\/span>\s*<a href="{{PORTFOLIO_URL}}">{{PORTFOLIO_DISPLAY}}<\/a>/, '');
  // Remove empty Projects section (personal builds not yet citable)
  cv = cv.replace(/<!-- PROJECTS -->[\s\S]*?<\/div>\n\n/, '');

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
