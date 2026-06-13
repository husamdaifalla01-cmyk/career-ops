// Per-role content for Husam Ahmed's tailored materials.
// Every line must be phone-screen defensible. Sources: cv.md, article-digest.md.
// Voice: humble, direct, honest. No em-dashes. One candid gap line per letter, max.
// Format contract: CV = 2 pages. Cover = 1 full page, org-researched, intent-forward.

// ---- Shared, truth-locked experience bullets ----

const IRCC = {
  identity: `Resolve probabilistic identity matches in IRCC's Global Case Management System (GCMS) by cross-referencing biographic, biometric, and travel-document evidence across two or more associated client records, including multi-record household cases, then commit master-record corrections (UCI merges, biometric associations and disassociations, profile relinking) to restore case integrity for federal applicants.`,
  identity_dq: `Maintain master-record integrity on national client data in IRCC's Global Case Management System (GCMS): investigate probabilistic identity matches across biographic, biometric, and travel-document evidence, then commit corrections (record merges, disassociations, profile relinking) with each decision documented.`,
  triage: `Triage the central Data Integrity unit's national intake of status checks and household identity-correction requests routed from offices across the federal department, supporting both PPMI and IMM applicants, prioritizing against case urgency and team capacity.`,
  irpa: `Apply the Immigration and Refugee Protection Act (IRPA) and controlled information-sharing protocols when handling flagged breaches, determining what client information can be shared, with whom, and under what authority, while coordinating corrective action with internal teams and overseas missions.`,
  access: `Provide biometric operations support through the Biometrics Operations Support Unit (BOSU): administer CIBIDS and myKEY access for staff at 60+ Visa Application Centres and Missions abroad and for IRCC partners, handling account provisioning, permission changes, and urgent technical issues across time zones, with each action logged.`,
  fraud_tactics: `Perform in-depth identity analysis on client files, examining passports and travel documents directly and drawing on close familiarity with the fraudulent tactics applicants use to try to defeat identity controls.`,
  pivot: `Run pivot analyses in Excel and reporting queries in GCMS across large case datasets to confirm application statuses, surface anomalies, and flag potential information-sharing breaches for controlled handling.`,
  citizen: `Confirm citizenship status by reviewing naturalization records, certificate issuance, and grant or revocation history in IRCC systems, returning verified status with supporting documentation cited for downstream officers and partner program requests.`,
};

const STELIS = {
  data: `Built cross-jurisdictional Power BI dashboards and exceedance heat maps from multi-source public data (Health Canada, US EPA, and provincial reports), cleaning and standardizing inconsistent formats so jurisdictions could be compared for the team's market prioritization.`,
  validation: `Validated a real-time microbial water-testing method against culture-based lab results in Excel, calculating percent agreement and false-positive rates across pilot sites to measure how closely it tracked the lab benchmark.`,
  reg: `Authored and maintained the team's main SOP and compliance checklist on federal and provincial drinking-water rules (Health Canada GCDWQ, Ontario O. Reg. 169/03 and 170/03).`,
  changelog: `Tracked regulatory changes in a running change log, updated the SOP and checklist as rules evolved, and flagged compliance risks to project leads.`,
  brief: `Wrote the briefing notes and reports for the company's leadership on the tradeoffs between real-time and lab-based monitoring: speed, verification, documentation, and regulatory acceptance.`,
  workflow: `Mapped the end-to-end monitoring workflow to find where handoffs slowed things down, comparing lab turnaround times against the response windows needed to contain contamination.`,
};

const ROGERS = {
  ops: `Ran the store floor as Manager on Duty, owning opening and closing procedures, cash and inventory controls, and daily targets, and serving as the escalation point for both staff and customers across the shift.`,
  kyc: `Acted as on-floor compliance authority for credit, KYC, and privacy decisions, reviewing customer documentation and credit-check results and approving transactions only when every regulatory and internal-policy step was met.`,
  kyc_fraud: `Acted as on-floor compliance authority for credit, KYC, and privacy decisions, reviewing customer documentation and credit-check results before any transaction closed: the store's front line against subscription and identity fraud.`,
  train: `Onboarded and trained new hires on KYC procedures, privacy requirements, and documentation standards, maintaining consistent compliance across shifts; led a team of three over three years.`,
  retention: `Kept customer retention above 90% by tracking customer history in Excel and keeping consistent, documented follow-up with customers.`,
  cash: `Performed daily cash audits and managed the store's cash-in-hand (BPO credit), reconciling balances and working within a set monthly budget; put together retention offers and outreach within that budget.`,
  materiel: `Procured and received product inventory and managed stock levels in a fast-paced retail environment.`,
};

const ELEMENTAL = {
  protocol: `Conducted structured interviews against research protocols and polling scripts, capturing responses accurately to support clean downstream datasets and consistent reporting across projects.`,
  refusals: `Improved sample quality by converting 30 to 40% of initial refusals, raising response rates and strengthening the representativeness of project data.`,
  standard: `Applied standardized procedures for respondent selection, structured data entry, and script adherence to maintain consistency and comparability across research projects.`,
  records: `Maintained accurate records of response outcomes, call attempts, and interview dispositions to support supervisor and analyst review and reliable downstream reporting.`,
};

const job = (company, role, period, location, bullets, note) => ({ company, role, period, location, bullets, note });

const irccJob = (bullets) => job(
  'Immigration, Refugees and Citizenship Canada, Operations Support Centre',
  'Program Assistant / Acting Case Processing Agent (CR-04, acting PM-01)',
  'Aug 2024 to Present', 'Ottawa, ON', bullets,
  'Held concurrently with the Stelis role below from Aug 2024 to Jul 2025.'
);
const stelisJob = (bullets) => job(
  'Stelis Environmental Solutions',
  'Water Quality Researcher',
  'Nov 2023 to Jul 2025', 'Ottawa, ON', bullets,
  'Held concurrently with the IRCC role above (Aug 2024 to Jul 2025).'
);
const rogersJob = (bullets) => job(
  'Rogers Communications',
  'Manager on Duty / Sales Advisor',
  'May 2021 to Aug 2024', 'Ottawa, ON', bullets
);
const elementalJob = (bullets) => job(
  'Elemental Data Collection',
  'Market Research Interviewer',
  'Jan 2021 to May 2021', 'Ottawa, ON', bullets
);

const GOOGLE_CERT = `Currently completing the Google Data Analytics Professional Certificate (Coursera).`;

const LANGS = `<span class="skill-item"><span class="skill-category">Languages:</span> English (native), Arabic (native), French (working knowledge)</span>`;
const TOOLS = `<span class="skill-item"><span class="skill-category">Tools:</span> GCMS, Excel (pivot tables, lookups, formulas), Power BI, SharePoint, Microsoft Teams</span>`;
const CLEAR = `<span class="skill-item"><span class="skill-category">Status:</span> Active Reliability Status (Government of Canada); no sponsorship required</span>`;

const EDU_BASE = `<div class="edu-item"><div class="edu-header"><div class="edu-title">Bachelor of Science, Biology <span class="edu-org">/ University of Ottawa</span></div><div class="edu-year">Sep 2020 to Dec 2024</div></div><div class="edu-desc">Structured data collection and documentation in microbiology coursework (sample handling, protocol adherence, results logging). Quantitative and statistical analysis of laboratory datasets in Excel; technical lab reports summarizing methods, results, and limitations.</div></div>`;
const CERTS = `<div class="cert-item"><div class="cert-title">Google Data Analytics Professional Certificate <span class="cert-org">/ Coursera</span></div><div class="cert-year">In progress</div></div>`;

// ---- Role definitions ----

export const roles = [

  // 0 ─ General recruitment resume (for staffing agencies; no cover letter)
  {
    slug: 'general-recruitment',
    company: 'Husam-Ahmed', roleName: 'General-Resume',
    summary: `Operations and compliance professional with federal government experience and an active Reliability Status. At IRCC's Operations Support Centre I resolve identity and data-integrity cases in GCMS, apply the IRPA and Privacy Act, examine documents for fraud, and administer CIBIDS and myKEY access for staff worldwide. My background also includes regulatory research with Power BI reporting, and three years as a Manager on Duty at a Rogers store, handling cash and inventory, customer credit and KYC checks, and supervising and training staff. Strong in case management, document and records management (GCDocs), data analysis, and confidentiality. Seeking analyst, officer, coordinator, or administrator roles in the National Capital Region.`,
    competencies: [
      ['Operations', 'Case Management, Data Integrity, Identity Verification, Case Triage, Quality Assurance, Records Management, Process Improvement'],
      ['Compliance & Policy', 'IRPA, Privacy Act, KYC, Information-Sharing Controls, Breach Handling, Regulatory Compliance'],
      ['Documentation & Tools', 'GCMS, GCDocs, SharePoint, Microsoft Excel, Power BI, SOPs, Briefing Notes, Microsoft Teams'],
      ['Administration & Finance', 'Coordination & Scheduling, Cash & Budget Management, Procurement & Receiving, Training & Supervision'],
    ],
    jobs: [
      irccJob([IRCC.identity, IRCC.fraud_tactics, IRCC.irpa, IRCC.triage, IRCC.pivot, IRCC.access]),
      stelisJob([STELIS.data, STELIS.validation, STELIS.reg, STELIS.brief, STELIS.changelog]),
      rogersJob([ROGERS.cash, ROGERS.materiel, ROGERS.kyc, ROGERS.train, ROGERS.retention]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.refusals, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    // no letter — CV only
  },

  // 1 ─ CBSA Various Positions inventory (PM-02/PM-03, AS streams)
  {
    slug: 'cbsa-pm-inventory',
    company: 'CBSA', roleName: 'Program-Operations-Inventory',
    recipient: 'Canada Border Services Agency\nHiring Team, Various Positions Inventory (poster 2258417)\nOttawa, ON',
    reLine: 'Application to PM-02 / PM-03 and AS program streams, Various Positions Inventory',
    summary: `Federal operations professional at IRCC's Operations Support Centre. I process identity and case-integrity work under IRPA at a national intake: GCMS casework, biometric operations support for 60+ Visa Application Centres and Missions, and controlled information-sharing decisions. Earlier, in a concurrent research role at Stelis through mid-2025, I wrote briefing notes and authored SOPs. Active Reliability Status. Substantive CR-04, acting PM-01. ${GOOGLE_CERT}`,
    competencies: ['Case Management (GCMS)', 'IRPA Application', 'Data Integrity', 'Case Triage at National Intake', 'Briefing Notes', 'SOP Development', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.identity, IRCC.fraud_tactics, IRCC.irpa, IRCC.triage, IRCC.citizen]),
      stelisJob([STELIS.brief, STELIS.reg, STELIS.changelog, STELIS.data, STELIS.validation]),
      rogersJob([ROGERS.ops, ROGERS.kyc, ROGERS.train, ROGERS.retention]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.refusals, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `I am applying to the PM-02/PM-03 program streams and AS administrative streams of this inventory. CBSA's mandate sits on a tension I find genuinely interesting to work inside: keep legitimate travel and trade moving while stopping what should not cross, and do both at volume, every day. That balance depends on something unglamorous that I happen to do for a living: identity established quickly and correctly, casework documented so it stands up later, and operational data clean enough to act on.`,
      `I work at IRCC's Operations Support Centre, where I resolve identity discrepancies in GCMS, triage the Data Integrity unit's national intake of identity-correction requests, and apply IRPA to information-sharing decisions every working day. CBSA enforces the same statute at the border that I apply upstream in case processing, and works the same client records in GCMS that I correct and maintain. The continuity between the two agencies' casework is the reason I am applying rather than waiting for something closer to my current desk.`,
      `On the program-delivery essentials: I execute master-record corrections (UCI merges, biometric associations and disassociations) on national client data, support biometric operations for staff at over 60 Visa Application Centres and Missions abroad across time zones, and confirm citizenship status against naturalization and revocation records, citing documentation for downstream officers. On the administrative and reporting side: in a concurrent research role through mid-2025 I authored the team's consolidated SOP and compliance checklist, maintained a regulatory change log, and wrote the briefing notes that went to senior management. I work in Excel and Power BI on large operational datasets, and I am currently completing the Google Data Analytics Professional Certificate to deepen that toolkit.`,
      `Where I see myself helping a CBSA program or operations team: I arrive already trained on GCMS and IRPA, already cleared at Reliability, and already used to national-intake volume, so the usual months of onboarding friction mostly are not there. Inventories exist so managers can pull someone who can contribute early; that is the specific thing I can offer.`,
      `For accuracy: my substantive classification is CR-04, with an acting PM-01 at IRCC. I am bilingual English and Arabic with working knowledge of French (not yet SLE tested, so I am applying to English-essential streams), based in the National Capital Region, available on standard internal-mobility timelines, and open to Secret-level screening. Thank you for considering my application across the streams where this profile fits.`,
    ],
  },

  // 2 ─ FINTRAC Officer, Supervision
  {
    slug: 'fintrac-officer-supervision',
    company: 'FINTRAC', roleName: 'Officer-Supervision',
    recipient: 'Financial Transactions and Reports Analysis Centre of Canada\nSupervision Sector Hiring Team\nOttawa, ON',
    reLine: 'Application for Officer, Supervision (Supervision Sector)',
    summary: `Compliance and operations professional working at the intersection FINTRAC supervises from above: three years executing KYC obligations on a regulated front line at Rogers, and current federal casework at IRCC applying IRPA and the Privacy Act to information-sharing and breach handling at a national intake. Earlier, in a concurrent research role at Stelis, authored SOPs, compliance checklists, and a regulatory change log. Active Reliability Status. ${GOOGLE_CERT}`,
    competencies: ['KYC and Client Due Diligence', 'Regulatory Compliance', 'Case Analysis and Triage', 'Compliance Documentation and SOPs', 'Breach Handling', 'Regulatory Change Tracking', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.irpa, IRCC.identity, IRCC.fraud_tactics, IRCC.triage, IRCC.pivot]),
      stelisJob([STELIS.reg, STELIS.changelog, STELIS.brief, STELIS.validation, STELIS.workflow]),
      rogersJob([ROGERS.kyc, ROGERS.train, ROGERS.ops, ROGERS.retention]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.standard, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `FINTRAC is the only place in Canada where compliance supervision and financial intelligence live under one roof, and the Supervision Sector is the part that meets reporting entities where compliance actually happens: programs examined on paper and in practice, findings documented, follow-through tracked. I want to do that work, and I am applying with an unusual but, I think, useful angle on it.`,
      `For three years at Rogers I was the person on the floor who would not let a transaction close until every KYC and documentation step was met, and who trained new hires to hold that same line. I know from the inside what a compliance program looks like when it is real, and what it looks like when it is paper: where front-line staff cut corners under volume, where documentation drifts from procedure, and what it takes operationally to keep the two aligned. When a Supervision officer examines a reporting entity's program, that is precisely the distinction being tested. At IRCC I now work the federal side of compliance, applying IRPA and controlled information-sharing protocols to breach handling at a national intake, where every decision is documented because it has to survive review.`,
      `The examination craft itself maps to work I already do. Assessing how an entity documents its obligations: in a concurrent research role I authored and maintained a consolidated SOP and compliance checklist as the team's primary reference, and kept a regulatory change log that flagged risks as rules evolved, so I know what good compliance documentation costs to build and maintain. Analyzing data and writing findings: I run Excel pivot analyses across large federal datasets to surface anomalies, and I built Power BI dashboards and wrote briefing notes for senior management. I am also completing the Google Data Analytics Professional Certificate.`,
      `Where I see myself helping the Supervision team: as obligations extend across more sectors, examination capacity is the constraint, and I work queues at national volume without losing documentation discipline. I would aim to become the officer whose examination files need no second pass: findings evidenced, rationale written, entity left knowing exactly what to fix.`,
      `I should be candid about the gap: I have not worked under the PCMLTFA directly. My regulatory frameworks have been IRPA, the Privacy Act, and federal and provincial drinking-water rules. What I can show is that I learn regulatory regimes quickly and in writing, well enough to author the reference documents other people work from. I hold an active Reliability Status with a clean history and am fully prepared for the Top Secret screening process. I am in Ottawa, bilingual English and Arabic with working French, with a BSc from the University of Ottawa.`,
    ],
  },

  // 3 ─ PSP Investments ATIP Analyst
  {
    slug: 'psp-atip-analyst',
    company: 'PSP-Investments', roleName: 'ATIP-Analyst',
    recipient: 'PSP Investments\nHiring Team, Analyst, Access to Information and Privacy (R4116)\nOttawa, ON',
    reLine: 'Application for Analyst, Access to Information and Privacy (R4116)',
    summary: `Federal operations professional who makes controlled disclosure decisions under the Privacy Act and IRPA every working day: what client information can be shared, with whom, under what authority. Current work at IRCC's Operations Support Centre spans breach handling, records corrections on national identity data, and case triage at a national intake, with every decision documented and defensible. Active Reliability Status. ${GOOGLE_CERT}`,
    competencies: ['Privacy Act Application', 'Controlled Disclosure Decisions', 'Breach Handling', 'Records Management', 'Case Triage and Tracking', 'Audit-Ready Documentation', 'SOP Development', 'Excel Analysis'],
    jobs: [
      irccJob([IRCC.irpa, IRCC.citizen, IRCC.triage, IRCC.identity, IRCC.pivot]),
      stelisJob([STELIS.reg, STELIS.changelog, STELIS.brief, STELIS.workflow, STELIS.data]),
      rogersJob([ROGERS.kyc, ROGERS.train, ROGERS.ops, ROGERS.retention]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.standard, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `PSP invests for the pensions of the federal public service, the Canadian Armed Forces, the Reserve Force, and the RCMP, and as a federal Crown corporation it carries access-to-information and privacy obligations alongside commercially sensitive investment work. That combination makes ATIP at PSP a more interesting analyst seat than most: requests have to be answered fully and on time, under statutes that do not bend, in an organization where what can and cannot be released takes real judgment. That is the seat I am applying for.`,
      `Deciding what information can be disclosed, to whom, and under what authority is my current day job. At IRCC's Operations Support Centre I apply IRPA and the Privacy Act to controlled information-sharing decisions, handle flagged privacy breaches, and coordinate corrective action with internal teams and overseas missions. Each decision is documented so it can stand up to review later. I also verify records before anything is released: I confirm citizenship status against naturalization and revocation records, citing supporting documentation for downstream officers and partner programs.`,
      `I should be candid that I have not processed formal ATIP requests. What I do daily is the program side of the same statutes: severing what can be shared from what cannot, verifying the record first, and managing a national intake queue against deadlines without letting accuracy slip. The request-processing workflow and the case law around exemptions would be new; the judgment underneath them would not be.`,
      `Where I see myself helping PSP's ATIP team: first, throughput with care, because I triage a national intake of identity-correction requests daily and know how to balance urgency against capacity; second, documentation, because in a concurrent research role I authored the team's consolidated SOP and compliance checklist and maintained a regulatory change log, so when the team needs its own procedures tightened or a tracking process improved, that is work I have done from both sides, not just followed. I track my own casework in Excel pivot analyses and am completing the Google Data Analytics Professional Certificate, which helps when reporting on request volumes and timelines.`,
      `I hold an active Reliability Status, I am based in Ottawa, and I work in English and Arabic natively with working knowledge of French. I would be glad to walk through any of this, including how I handle a borderline disclosure call, in a screen.`,
    ],
  },

  // 4 ─ CMHC Analyst, Data Quality
  {
    slug: 'cmhc-data-quality-analyst',
    company: 'CMHC', roleName: 'Data-Quality-Analyst',
    recipient: 'Canada Mortgage and Housing Corporation\nHiring Team, Analyst, Data Quality\nOttawa, ON',
    reLine: 'Application for Analyst, Data Quality',
    summary: `Data-quality analyst in practice: I maintain master-record integrity on one of the federal government's largest case-management systems (GCMS at IRCC), investigating probabilistic matches, correcting records, and surfacing anomalies across national datasets. Earlier, in a concurrent research role at Stelis, I combined and standardized multi-source public data and built the Power BI dashboards a research team prioritized by. Excel pivot analysis daily. Active Reliability Status. ${GOOGLE_CERT}`,
    competencies: ['Data Quality and Integrity', 'Master Data and Entity Resolution', 'Anomaly Detection', 'Data Standardization and Cleansing', 'Power BI Dashboards', 'Excel (Pivot Tables, Lookups)', 'Process Documentation', 'Operational Reporting'],
    jobs: [
      irccJob([IRCC.identity_dq, IRCC.pivot, IRCC.triage, IRCC.access, IRCC.citizen]),
      stelisJob([STELIS.data, STELIS.validation, STELIS.reg, STELIS.brief, STELIS.changelog]),
      rogersJob([ROGERS.retention, ROGERS.kyc, ROGERS.train, ROGERS.ops]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.refusals, ELEMENTAL.standard, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `Housing decisions in this country run on CMHC's numbers. Market analyses, the Housing Market Information Portal, mortgage insurance operations, and the research behind housing policy all sit on data that someone has to keep clean, consistent, and trustworthy before any of it can be used. A wrong record in a national dataset does not stay contained; it propagates into analysis and into decisions people act on. Data quality is the unglamorous layer everything else depends on, and it happens to be the work I do and like.`,
      `My job title says program assistant. My actual day job is data quality on a national system: in IRCC's Global Case Management System I investigate probabilistic identity matches, decide whether records belong to the same person, and commit the master-record corrections that restore integrity, with each correction documented. I work these cases from a national intake queue, so volume, prioritization, and consistency under load are daily realities rather than abstractions. When your posting describes data quality analysis, that is not adjacent to what I do. It is what I do.`,
      `The toolset matches too. I run pivot analyses in Excel across large case datasets to confirm statuses and surface anomalies. In a concurrent research role I took inconsistently formatted public data from Health Canada, the US EPA, and provincial reports, standardized it so it could be compared, and built the cross-jurisdictional Power BI dashboards that team prioritized markets by. I also quantified data reliability directly, calculating percent agreement and false-positive rates between a real-time method and its lab benchmark, the same discipline as measuring a dataset against a quality standard rather than assuming it passes.`,
      `Where I see myself helping CMHC's team: running the recurring quality checks and reconciliations that keep datasets release-ready, chasing root causes of recurring errors rather than re-fixing symptoms, and documenting quality procedures so they survive staff turnover. I have written SOPs and briefing notes across these roles, so turning findings into something a manager or a data steward can act on is familiar ground.`,
      `Where I will be honest about the edges: my stack today is Excel and Power BI, not SQL. I am partway through the Google Data Analytics Professional Certificate, which covers it, and querying is the next tool on my list rather than one I claim now. I am in Ottawa, hold an active Reliability Status from current federal employment, and work in English and Arabic natively with working French. I would welcome the chance to talk through how federal-scale record integrity translates to CMHC's data.`,
    ],
  },

  // 5 ─ Bank of Canada Business Analyst, HR Systems Support
  {
    slug: 'boc-ba-hr-systems',
    company: 'Bank-of-Canada', roleName: 'Business-Analyst-HR-Systems',
    recipient: 'Bank of Canada\nHiring Team, Business Analyst, HR Systems Support\nOttawa, ON',
    reLine: 'Application for Business Analyst, HR Systems Support',
    summary: `Operations and process analyst with two years across federal case operations and quality-systems research. At IRCC I administer CIBIDS and myKEY access and permissions for staff at 60+ sites worldwide and triage a national service intake; at Stelis (through mid-2025) I mapped end-to-end workflows, authored the SOPs a team ran on, and built Power BI dashboards from multi-source data. Process documentation, system administration, and data quality are the through-line. Active Reliability Status. ${GOOGLE_CERT}`,
    competencies: ['Business Process Analysis', 'Workflow Mapping', 'Process Documentation and SOPs', 'System Access Administration', 'Service Request Triage', 'Data Quality', 'Power BI Dashboards', 'Excel (Pivot Tables, Lookups)'],
    jobs: [
      irccJob([IRCC.access, IRCC.triage, IRCC.pivot, IRCC.irpa, IRCC.identity]),
      stelisJob([STELIS.workflow, STELIS.brief, STELIS.data, STELIS.reg, STELIS.changelog]),
      rogersJob([ROGERS.train, ROGERS.ops, ROGERS.retention, ROGERS.kyc]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.standard, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `The Bank of Canada's mandate work, monetary policy, the financial system, currency, depends on something much less visible: institutional operations smooth enough that the people doing that work never have to think about them. HR systems support sits exactly there. When an access request stalls or a process breaks, someone's actual work stops. I have spent the last two years being the person who keeps that from happening, and the chance to do it inside an institution I respect as much as the Bank is why this posting caught me.`,
      `At IRCC's Operations Support Centre I administer CIBIDS and myKEY access for staff at over 60 Visa Application Centres and Missions worldwide: account provisioning, permission changes, and urgent system issues, triaged from a national intake against urgency and capacity, with every action logged. It is service delivery with an audit trail, across time zones, for users who cannot do their jobs until I have done mine. That is, in different clothes, the HR systems support function your posting describes.`,
      `On the analysis side of business analysis: in a concurrent research role I mapped an end-to-end monitoring workflow to find where handoffs slowed things down, authored the consolidated SOP the team ran on, and kept it current as requirements changed. I built Power BI dashboards from multi-source data and wrote briefing notes that put tradeoffs in front of senior management in plain language, and at IRCC I run Excel pivot analyses on large operational datasets daily. I am also completing the Google Data Analytics Professional Certificate to formalize and extend that toolkit.`,
      `Where I see myself helping the team: first, taking the recurring service and access workload off the team's senior people quickly, because provisioning, triage, and documentation discipline transfer on day one; then earning the analysis work, documenting processes as they actually run, flagging where they can be simplified or automated, and building the reporting that shows whether changes worked.`,
      `I should be candid that HR as a domain is new to me. My experience is federal operations, regulatory research, and three years of front-line team leadership at Rogers, where I onboarded and trained new hires myself, so I have lived the employee-lifecycle processes this role supports, just from the floor rather than the system side. I am in Ottawa, hold an active Reliability Status, and work in English and Arabic natively with working French, which I am actively improving. The Bank's bilingual environment is part of the appeal, not a hurdle.`,
    ],
  },

  // 6 ─ Interac Fraud Operations, Countermeasures Specialist
  {
    slug: 'interac-fraud-ops-specialist',
    company: 'Interac', roleName: 'Fraud-Operations-Specialist',
    recipient: 'Interac Corp.\nHiring Team, Fraud Operations, Countermeasures\nToronto, ON',
    reLine: 'Application for Fraud Operations, Countermeasures, Specialist',
    summary: `Identity verification and operations specialist. At IRCC's Operations Support Centre I investigate identity discrepancies on a national intake: deciding whether two records are the same person from biographic, biometric, and document evidence, triaging by urgency, and escalating anomalies: the same false-positive triage discipline fraud operations runs on. I examine passports and travel documents directly and know the tactics used to defeat identity checks. Three prior years of front-line KYC and fraud-prevention decisions at Rogers, where I trained every new hire on verification procedure. Active Reliability Status. ${GOOGLE_CERT}`,
    competencies: ['Identity Verification', 'Anomaly Detection and Escalation', 'Case Triage at Volume', 'False-Positive Analysis', 'KYC and Due Diligence', 'Team Training and Coaching', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.identity, IRCC.fraud_tactics, IRCC.triage, IRCC.pivot, IRCC.access]),
      stelisJob([STELIS.validation, STELIS.brief, STELIS.data, STELIS.changelog, STELIS.workflow]),
      rogersJob([ROGERS.kyc_fraud, ROGERS.train, ROGERS.ops, ROGERS.retention]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.refusals, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `When an Interac e-Transfer goes wrong, a Canadian feels it personally, and trust in the rail is the product itself. That is what makes fraud operations at Interac different from fraud operations at a single bank: countermeasures protect a piece of national infrastructure that almost everyone in the country touches, and the trust has to be re-earned on every transaction. That is the team I want to work on, and I am applying with experience that I think translates more directly than my job title suggests.`,
      `Fraud operations and my current casework share one core discipline: deciding quickly whether an identity is what it claims to be, and being right enough, consistently enough, that the queue keeps moving without letting bad cases through. At IRCC's Operations Support Centre I make those calls daily on a national intake, cross-referencing biographic, biometric, and travel-document evidence to resolve probabilistic identity matches, and escalating the anomalies that need controlled handling under federal protocols.`,
      `I should be candid: my title does not say fraud. The day-to-day does. Identity conflicts, duplicate records, and document evidence that does not line up are my caseload, and I dig into the documents themselves: passports and travel documents, examined with close familiarity with the tactics applicants actually use to try to trick identity systems. Before IRCC, I spent three years as the on-floor KYC and credit decision authority at Rogers, the retail front line against subscription and identity fraud, where I also trained every new hire on verification procedure. Coaching a team to hold a compliance line under volume is something I have done for years, not something I would be trying for the first time.`,
      `Where I see myself helping a countermeasures team: working the escalation queue accurately from early on, and then helping measure what the team often has no time to measure. In a concurrent research role I calculated percent agreement and false-positive rates between a real-time detection method and its benchmark, the same analytical shape as evaluating whether a countermeasure is catching fraud or just creating friction. I built that kind of reporting in Excel and Power BI, and I am completing the Google Data Analytics Professional Certificate to push it further.`,
      `I support operations across 60+ international sites and time zones today, so always-on environments are familiar. I work in English and Arabic natively with working French, hold an active federal Reliability Status, and am based in Ottawa with genuine flexibility for a hybrid Toronto arrangement. I would be glad to talk through real case patterns in a screen.`,
    ],
  },

  // 7 ─ Equifax Fraud Investigator, Managed Services
  {
    slug: 'equifax-fraud-investigator',
    company: 'Equifax', roleName: 'Fraud-Investigator',
    recipient: 'Equifax Canada\nHiring Team, Fraud Investigator, Managed Services (j00176117)\nToronto, ON',
    reLine: 'Application for Fraud Investigator, Managed Services (req j00176117)',
    summary: `Identity and verification specialist working a national investigation queue. At IRCC I investigate identity discrepancies in GCMS, weighing biographic, biometric, and document evidence to decide whether records belong to the same person, with a documented rationale behind every correction: the same judgment application-fraud review runs on. I examine passports and travel documents directly and know the tactics applicants use to trick identity systems. Three years at Rogers making front-line credit, KYC, and fraud-prevention decisions on credit-check results. False-positive analysis from a concurrent research role at Stelis. Active Reliability Status. ${GOOGLE_CERT}`,
    competencies: ['Identity Investigation', 'Queue-Based Casework', 'Documented Decision Rationale', 'Credit and KYC Decisions', 'Anomaly Detection', 'False-Positive Analysis', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.identity, IRCC.fraud_tactics, IRCC.triage, IRCC.pivot, IRCC.citizen]),
      stelisJob([STELIS.validation, STELIS.brief, STELIS.data, STELIS.changelog, STELIS.workflow]),
      rogersJob([ROGERS.kyc_fraud, ROGERS.train, ROGERS.ops, ROGERS.retention]),
      elementalJob([ELEMENTAL.protocol, ELEMENTAL.refusals, ELEMENTAL.records]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `Managed Services is a distinctive promise: clients hand Equifax their fraud queues and trust that every decision made in their name will be fast, consistent, and defensible when challenged. Working application-fraud cases inside the company whose data underpins Canadian credit decisions, with that client trust on the line, is a version of investigation work I would take seriously and genuinely enjoy. It is also, in substance, very close to the queue I already work.`,
      `Working a fraud queue well means holding two things at once: enough speed that the volume clears, and enough rigor that every decision survives review. That balance is my current job. At IRCC's Operations Support Centre I work a national intake of identity cases, investigating discrepancies across biographic, biometric, and travel-document evidence and committing record corrections with the rationale documented, because in federal casework an undocumented decision does not count.`,
      `I should be candid that my title is not fraud investigator. The substance is close: identity conflicts, duplicate and unlinked records, and documents that do not reconcile are what I investigate daily. I examine passports and travel documents directly, I know the tactics applicants use to try to trick identity systems, and the core judgment, distinguishing an innocent mismatch from a real attempt, is the same one application-fraud review runs on. The credit side is not new to me either. For three years at Rogers I was the on-floor authority for credit and KYC decisions, the retail front line against subscription and identity fraud, reviewing documentation and credit-check results before any transaction closed and training new hires to the same standard. I have read credit-check outputs as a decision input for years; reading them from inside the bureau would be a deeper version of a familiar discipline.`,
      `Where I see myself helping the Managed Services team: clearing cases at the productivity-and-quality balance the service is sold on, writing the documented rationale that lets a client audit any decision, and contributing to the quality side of the operation. In a concurrent research role I quantified detection quality directly, calculating percent agreement and false-positive rates between a real-time method and its benchmark in Excel pivot tables, and built Power BI reporting on operational data. I am completing the Google Data Analytics Professional Certificate to extend exactly that skill set.`,
      `I work in English and Arabic natively with working French, hold an active federal Reliability Status, and am based in Ottawa with flexibility for hybrid arrangements. I would be glad to walk through how I handle a borderline case, end to end, in a screen.`,
    ],
  },
];

export const shared = { EDU_BASE, CERTS };
