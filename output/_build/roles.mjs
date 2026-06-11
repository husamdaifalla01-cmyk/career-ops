// Per-role content for Husam Ahmed's tailored materials.
// Every line must be phone-screen defensible. Sources: cv.md, article-digest.md.
// Voice: humble, direct, honest. No em-dashes. One candid gap line per letter, max.

// ---- Shared, truth-locked experience bullets ----

const IRCC = {
  identity: `Resolve probabilistic identity matches in IRCC's Global Case Management System (GCMS) by cross-referencing biographic, biometric, and travel-document evidence, then commit master-record corrections (UCI merges, biometric associations and disassociations, profile relinking) to restore case integrity.`,
  identity_dq: `Maintain master-record integrity on national client data in IRCC's Global Case Management System (GCMS): investigate probabilistic identity matches across biographic, biometric, and travel-document evidence, then commit corrections (record merges, disassociations, profile relinking).`,
  triage: `Triage the central Data Integrity unit's national intake of status checks and household identity-correction requests (PPMI and IMM applicants), prioritizing against case urgency and team capacity.`,
  irpa: `Apply the Immigration and Refugee Protection Act (IRPA) and controlled information-sharing protocols when handling flagged breaches, determining what client information can be shared, with whom, and under what authority.`,
  access: `Administer GCMS access and biometric operations support for staff at 60+ Visa Application Centres and Missions abroad: account provisioning, permission changes, and urgent technical issues across time zones, each action logged.`,
  pivot: `Run pivot analyses in Excel and reporting queries in GCMS across large case datasets to confirm application statuses, surface anomalies, and flag potential information-sharing breaches for controlled handling.`,
  citizen: `Confirm citizenship status by reviewing naturalization records, certificate issuance, and grant or revocation history, returning verified status with supporting documentation cited for downstream officers and partner programs.`,
};

const STELIS = {
  data: `Combine and clean public drinking-water monitoring data from Health Canada, the US EPA, and provincial reports, standardizing inconsistent formats, then build cross-jurisdictional Power BI dashboards (exceedance heat maps) that drive the team's market prioritization.`,
  validation: `Compare real-time ColiMinder readings against culture-based lab results in Excel pivot tables, calculating percent agreement and false-positive rates across pilot sites to quantify how closely the real-time method tracks the lab benchmark.`,
  reg: `Author and maintain the team's consolidated SOP and compliance checklist on federal and provincial drinking-water rules (Health Canada GCDWQ, Ontario O. Reg. 169/03 and 170/03); track regulatory changes in a running change log and flag compliance risks to project leads.`,
  brief: `Write the briefing notes and comparison tables that go to senior management, laying out speed, verification, documentation, and regulatory-acceptance tradeoffs between real-time and lab-based monitoring.`,
  workflow: `Map the end-to-end monitoring workflow to flag where handoffs slow things down, and update the team's SOP and compliance checklist as rules evolve.`,
};

const ROGERS = {
  kyc: `Acted as on-floor compliance authority for credit, KYC, and privacy decisions as Manager on Duty, reviewing customer documentation and credit-check results and approving transactions only when every regulatory and internal-policy step was met.`,
  train: `Onboarded and trained new hires on KYC procedures, privacy requirements, and documentation standards, maintaining consistent compliance across shifts; led a team of three over three years.`,
  retention: `Drove client retention above 90% by analyzing CRM customer history in Excel and building structured follow-up workflows that produced an auditable record of each customer interaction.`,
  kyc_fraud: `Acted as on-floor compliance authority for credit, KYC, and privacy decisions as Manager on Duty, reviewing customer documentation and credit-check results before any transaction closed: the store's front line against subscription and identity fraud.`,
};

const job = (company, role, period, location, bullets, note) => ({ company, role, period, location, bullets, note });

const irccJob = (bullets) => job(
  'Immigration, Refugees and Citizenship Canada, Operations Support Centre',
  'Program Assistant / Acting Case Processing Agent (CR-04, acting PM-01)',
  'Aug 2024 to Present', 'Ottawa, ON', bullets,
  'Held concurrently with the Stelis role below.'
);
const stelisJob = (bullets) => job(
  'Stelis Environmental Solutions',
  'Water Quality Researcher, Quality Systems',
  'Nov 2023 to Present', 'Ottawa, ON', bullets,
  'Concurrent with the IRCC role above.'
);
const rogersJob = (bullets) => job(
  'Rogers Communications',
  'Manager on Duty / Sales Advisor',
  'May 2021 to Aug 2024', 'Ottawa, ON', bullets
);

const LANGS = `<span class="skill-item"><span class="skill-category">Languages:</span> English (native), Arabic (native), French (working knowledge)</span>`;
const TOOLS = `<span class="skill-item"><span class="skill-category">Tools:</span> GCMS, Excel (pivot tables, lookups), Power BI, SharePoint, Microsoft Teams</span>`;
const CLEAR = `<span class="skill-item"><span class="skill-category">Status:</span> Active Reliability Status (Government of Canada); no sponsorship required</span>`;

const EDU_BASE = `<div class="edu-item"><div class="edu-header"><div class="edu-title">Bachelor of Science, Biology <span class="edu-org">/ University of Ottawa</span></div><div class="edu-year">Dec 2024</div></div><div class="edu-desc">Quantitative analysis of laboratory datasets in Excel; structured data collection and protocol adherence in microbiology coursework.</div></div>`;
const CERTS = `<div class="cert-item"><div class="cert-title">Google Data Analytics Professional Certificate <span class="cert-org">/ Coursera</span></div><div class="cert-year">In progress</div></div>`;

// ---- Role definitions ----

export const roles = [

  // 1 ─ CBSA Various Positions inventory (PM-02/PM-03, AS streams)
  {
    slug: 'cbsa-pm-inventory',
    company: 'CBSA', roleName: 'Program-Operations-Inventory',
    trackerCompany: 'CBSA', trackerRole: 'Various Positions Inventory (PM-02/03, AS)',
    recipient: 'Canada Border Services Agency\nHiring Team, Various Positions Inventory (poster 2258417)\nOttawa, ON',
    reLine: 'Application to PM-02 / PM-03 and AS program streams, Various Positions Inventory',
    summary: `Federal operations professional at IRCC's Operations Support Centre. I process identity and case-integrity work under IRPA at a national intake: GCMS casework, biometric operations support for 60+ Visa Application Centres and Missions, and controlled information-sharing decisions. Concurrently, I write briefing notes and author SOPs in a regulatory research role. Active Reliability Status. Substantive CR-04, acting PM-01.`,
    competencies: ['Case Management (GCMS)', 'IRPA Application', 'Data Integrity', 'Case Triage at National Intake', 'Briefing Notes', 'SOP Development', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.identity, IRCC.triage, IRCC.irpa, IRCC.access, IRCC.citizen]),
      stelisJob([STELIS.brief, STELIS.reg]),
      rogersJob([ROGERS.kyc, ROGERS.train]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `I am applying to the PM-02/PM-03 program streams and AS administrative streams of this inventory. I work at IRCC's Operations Support Centre, where I resolve identity discrepancies in GCMS, triage the Data Integrity unit's national intake of identity-correction requests, and apply IRPA to information-sharing decisions every working day. Border integrity runs on the same system, the same statute, and the same discipline. That continuity is why I am applying.`,
      `On the program-delivery essentials: I execute master-record corrections (UCI merges, biometric associations and disassociations) on national client data, support biometric operations for staff at over 60 Visa Application Centres and Missions abroad, and confirm citizenship status against naturalization and revocation records, citing documentation for downstream officers. Every action is logged and every decision is documented, because in this work an undocumented decision is a liability.`,
      `On the administrative and reporting side: in a concurrent research role I author the team's consolidated SOP and compliance checklist, maintain a regulatory change log, and write the briefing notes that go to senior management. I also run Excel pivot analyses and build Power BI dashboards on large operational datasets.`,
      `Assets I bring beyond the essentials: an active Reliability Status, native English and Arabic, working knowledge of French (not yet SLE tested, so I am applying to English-essential streams), and current GCMS fluency. For accuracy: my substantive classification is CR-04, with an acting PM-01 at IRCC. I am in the NCR, available with standard internal-mobility timelines, and open to Secret-level screening.`,
    ],
  },

  // 2 ─ FINTRAC Officer, Supervision
  {
    slug: 'fintrac-officer-supervision',
    company: 'FINTRAC', roleName: 'Officer-Supervision',
    trackerCompany: 'FINTRAC', trackerRole: 'Officer, Supervision',
    recipient: 'Financial Transactions and Reports Analysis Centre of Canada\nSupervision Sector Hiring Team\nOttawa, ON',
    reLine: 'Application for Officer, Supervision (Supervision Sector)',
    summary: `Compliance and operations professional working at the intersection FINTRAC supervises from above: three years executing KYC obligations on a regulated front line at Rogers, and current federal casework at IRCC applying IRPA and the Privacy Act to information-sharing and breach handling at a national intake. Concurrently author SOPs, compliance checklists, and a regulatory change log in a quality-systems research role. Active Reliability Status.`,
    competencies: ['KYC and Client Due Diligence', 'Regulatory Compliance', 'Case Analysis and Triage', 'Compliance Documentation and SOPs', 'Breach Handling', 'Regulatory Change Tracking', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.irpa, IRCC.triage, IRCC.pivot, IRCC.identity]),
      stelisJob([STELIS.reg, STELIS.brief, STELIS.validation]),
      rogersJob([ROGERS.kyc, ROGERS.train]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `For three years at Rogers I was the person on the floor who would not let a transaction close until every KYC and documentation step was met, and who trained new hires to hold that same line. At IRCC I now work the federal side of compliance: applying IRPA and controlled information-sharing protocols to breach handling at a national intake. Supervision work looks at reporting entities from above. I have stood inside one at the counter, and I know exactly where compliance programs hold and where they quietly fail. That ground-level view is what I would bring to the Supervision team.`,
      `The day-to-day of supervision maps to work I already do. Examining how an entity documents its obligations: I author and maintain a consolidated SOP and compliance checklist as the primary reference in my research role, and I keep a regulatory change log that flags risks as rules evolve. Analyzing case data and writing findings: I run Excel pivot analyses across large federal datasets to surface anomalies, and I write the briefing notes that go to senior management. Documented, defensible decisions under a statute: that is my current job description in practice.`,
      `I should be candid about the gap: I have not worked under the PCMLTFA directly. My regulatory frameworks have been IRPA, the Privacy Act, and federal and provincial drinking-water rules. What I can show is that I learn regulatory regimes quickly and in writing, well enough to author the reference documents other people work from.`,
      `I hold an active Reliability Status with a clean history and am fully prepared for the Top Secret screening process. I am in Ottawa, bilingual English and Arabic with working French, and a degree in science from the University of Ottawa.`,
    ],
  },

  // 3 ─ PSP Investments ATIP Analyst
  {
    slug: 'psp-atip-analyst',
    company: 'PSP-Investments', roleName: 'ATIP-Analyst',
    trackerCompany: 'PSP Investments', trackerRole: 'Analyst, ATIP (R4116)',
    recipient: 'PSP Investments\nHiring Team, Analyst, Access to Information and Privacy (R4116)\nOttawa, ON',
    reLine: 'Application for Analyst, Access to Information and Privacy (R4116)',
    summary: `Federal operations professional who makes controlled disclosure decisions under the Privacy Act and IRPA every working day: what client information can be shared, with whom, under what authority. Current work at IRCC's Operations Support Centre spans breach handling, records corrections on national identity data, and case triage at a national intake, with every decision documented and defensible. Active Reliability Status.`,
    competencies: ['Privacy Act Application', 'Controlled Disclosure Decisions', 'Breach Handling', 'Records Management', 'Case Triage and Tracking', 'Audit-Ready Documentation', 'SOP Development', 'Excel Analysis'],
    jobs: [
      irccJob([IRCC.irpa, IRCC.citizen, IRCC.triage, IRCC.identity]),
      stelisJob([STELIS.reg, STELIS.brief]),
      rogersJob([ROGERS.kyc, ROGERS.train]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `Deciding what information can be disclosed, to whom, and under what authority is my current day job. At IRCC's Operations Support Centre I apply IRPA and the Privacy Act to controlled information-sharing decisions, handle flagged privacy breaches, and coordinate corrective action with internal teams and overseas missions. Each decision is documented so it can stand up to review later. That is the discipline ATIP work runs on, and it is why this role fits.`,
      `I should be candid that I have not processed formal ATIP requests. What I do daily is the program side of the same statute: severing what can be shared from what cannot, verifying records before release (I confirm citizenship status against naturalization and revocation records, citing supporting documentation for downstream officers), and managing a national intake queue against deadlines. The request-processing workflow and the case law around exemptions would be new; the judgment underneath them would not be.`,
      `Two things beyond the core. First, documentation: in a concurrent research role I author the team's consolidated SOP and compliance checklist and maintain a regulatory change log, so building and following audit-ready process is something I have done from both sides. Second, throughput with care: triaging a national intake of identity-correction requests means balancing urgency against capacity daily without letting accuracy slip.`,
      `I hold an active Reliability Status, I am in Ottawa, and I work in English and Arabic natively with working French. I would be glad to walk through any of this in a screen.`,
    ],
  },

  // 4 ─ CMHC Analyst, Data Quality
  {
    slug: 'cmhc-data-quality-analyst',
    company: 'CMHC', roleName: 'Data-Quality-Analyst',
    trackerCompany: 'CMHC', trackerRole: 'Analyst, Data Quality',
    recipient: 'Canada Mortgage and Housing Corporation\nHiring Team, Analyst, Data Quality\nOttawa, ON',
    reLine: 'Application for Analyst, Data Quality',
    summary: `Data-quality analyst in practice: I maintain master-record integrity on one of the federal government's largest case-management systems (GCMS at IRCC), investigating probabilistic matches, correcting records, and surfacing anomalies across national datasets. Concurrently, I combine and standardize multi-source public data and build the Power BI dashboards a research team prioritizes by. Excel pivot analysis daily. Active Reliability Status.`,
    competencies: ['Data Quality and Integrity', 'Master Data and Entity Resolution', 'Anomaly Detection', 'Data Standardization and Cleansing', 'Power BI Dashboards', 'Excel (Pivot Tables, Lookups)', 'Process Documentation', 'Operational Reporting'],
    jobs: [
      irccJob([IRCC.identity_dq, IRCC.pivot, IRCC.triage, IRCC.access]),
      stelisJob([STELIS.data, STELIS.validation, STELIS.reg]),
      rogersJob([ROGERS.retention]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `My job title says program assistant. My actual day job is data quality on a national system: in IRCC's Global Case Management System I investigate probabilistic identity matches, decide whether two records are the same person, and commit the master-record corrections that restore integrity, with each correction documented. When your posting describes data quality analysis, that is not adjacent to what I do. It is what I do.`,
      `The toolset matches too. I run pivot analyses in Excel across large case datasets to confirm statuses and surface anomalies. In a concurrent research role I take inconsistently formatted public data from Health Canada, the US EPA, and provincial reports, standardize it so it can be compared, and build the cross-jurisdictional Power BI dashboards my team prioritizes markets by. I also quantify data reliability directly: percent agreement and false-positive rates between a real-time method and its lab benchmark.`,
      `Where I will be honest about the edges: my stack today is Excel and Power BI, not SQL. I am partway through the Google Data Analytics Professional Certificate, which covers it, and querying is the next tool on my list rather than one I claim now.`,
      `I am in Ottawa, hold an active Reliability Status from current federal employment, and work in English and Arabic natively with working French. I would welcome the chance to talk through how federal-scale record integrity translates to CMHC's data.`,
    ],
  },

  // 5 ─ Bank of Canada Business Analyst, HR Systems Support
  {
    slug: 'boc-ba-hr-systems',
    company: 'Bank-of-Canada', roleName: 'Business-Analyst-HR-Systems',
    trackerCompany: 'Bank of Canada', trackerRole: 'Business Analyst, HR Systems Support',
    recipient: 'Bank of Canada\nHiring Team, Business Analyst, HR Systems Support\nOttawa, ON',
    reLine: 'Application for Business Analyst, HR Systems Support',
    summary: `Operations and process analyst with two years across federal case operations and quality-systems research. At IRCC I administer system access and permissions for staff at 60+ sites worldwide and triage a national service intake; at Stelis I map end-to-end workflows, author the SOPs a team runs on, and build Power BI dashboards from multi-source data. Process documentation, system administration, and data quality are the through-line. Active Reliability Status.`,
    competencies: ['Business Process Analysis', 'Workflow Mapping', 'Process Documentation and SOPs', 'System Access Administration', 'Service Request Triage', 'Data Quality', 'Power BI Dashboards', 'Excel (Pivot Tables, Lookups)'],
    jobs: [
      irccJob([IRCC.access, IRCC.triage, IRCC.pivot, IRCC.irpa]),
      stelisJob([STELIS.workflow, STELIS.brief, STELIS.data]),
      rogersJob([ROGERS.train, ROGERS.retention]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `Supporting the people who depend on a system is concrete work: someone cannot do their job until the access request, the permission change, or the broken process in front of them is resolved. At IRCC's Operations Support Centre I do that work daily for staff at over 60 Visa Application Centres and Missions worldwide, administering GCMS access and triaging a national intake of service requests against urgency and capacity, with every action logged. Your posting describes business analysis in support of HR systems and services. The systems would be new; the work would not.`,
      `On process analysis: in my concurrent research role I map an end-to-end monitoring workflow to find where handoffs slow things down, author the consolidated SOP the team actually runs on, and keep it current as requirements change. On reporting: I build Power BI dashboards from multi-source data and run Excel pivot analyses on large operational datasets, and I write briefing notes that put tradeoffs in front of senior management in plain language.`,
      `I should be candid that HR as a domain is new to me. My experience is federal operations, regulatory research, and three years of front-line team leadership at Rogers, where I onboarded and trained new hires myself, so I have lived the employee-lifecycle processes this role supports, just from the floor rather than the system side.`,
      `I am in Ottawa, hold an active Reliability Status, and work in English and Arabic natively with working French, which I am actively improving. The Bank's bilingual environment is part of the appeal.`,
    ],
  },

  // 6 ─ Interac Fraud Operations, Countermeasures Specialist
  {
    slug: 'interac-fraud-ops-specialist',
    company: 'Interac', roleName: 'Fraud-Operations-Specialist',
    trackerCompany: 'Interac', trackerRole: 'Fraud Operations, Countermeasures Specialist',
    recipient: 'Interac Corp.\nHiring Team, Fraud Operations, Countermeasures\nToronto, ON',
    reLine: 'Application for Fraud Operations, Countermeasures, Specialist',
    summary: `Identity verification and operations specialist. At IRCC's Operations Support Centre I investigate identity discrepancies on a national intake: deciding whether two records are the same person from biographic, biometric, and document evidence, triaging by urgency, and escalating anomalies for controlled handling: the same false-positive triage discipline fraud operations runs on. Three prior years of front-line KYC and fraud-prevention decisions at Rogers, where I also trained every new hire on verification procedure. Active Reliability Status.`,
    competencies: ['Identity Verification', 'Anomaly Detection and Escalation', 'Case Triage at Volume', 'False-Positive Analysis', 'KYC and Due Diligence', 'Team Training and Coaching', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.identity, IRCC.triage, IRCC.pivot, IRCC.access]),
      stelisJob([STELIS.validation, STELIS.brief]),
      rogersJob([ROGERS.kyc_fraud, ROGERS.train]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `Fraud operations and my current casework share one core discipline: deciding quickly whether an identity is what it claims to be, and being right enough, consistently enough, that the queue keeps moving without letting bad cases through. At IRCC's Operations Support Centre I make those calls daily on a national intake, cross-referencing biographic, biometric, and travel-document evidence to resolve probabilistic identity matches, and escalating the anomalies that need controlled handling.`,
      `I should be candid: my title does not say fraud. The day-to-day does. Identity conflicts, duplicate records, document evidence that does not line up, and the judgment call between a false positive and a real problem are my caseload. Before IRCC, I spent three years as the on-floor KYC and credit decision authority at Rogers, where I also trained every new hire on verification procedure, so coaching a team to hold a compliance line is something I have done, not something I would be trying for the first time.`,
      `Two things I would add to a countermeasures team beyond the casework. First, I measure detection quality rather than assume it: in my concurrent research role I calculate percent agreement and false-positive rates between a real-time detection method and its benchmark, which is the same analytical shape as tuning fraud countermeasures. Second, I support operations across 60+ international sites and time zones, so high-volume, always-on environments are familiar.`,
      `I work in English and Arabic natively with working French, hold an active federal Reliability Status, and am based in Ottawa with flexibility for a hybrid Toronto arrangement.`,
    ],
  },

  // 7 ─ Equifax Fraud Investigator, Managed Services
  {
    slug: 'equifax-fraud-investigator',
    company: 'Equifax', roleName: 'Fraud-Investigator',
    trackerCompany: 'Equifax Canada', trackerRole: 'Fraud Investigator, Managed Services',
    recipient: 'Equifax Canada\nHiring Team, Fraud Investigator, Managed Services (j00176117)\nToronto, ON',
    reLine: 'Application for Fraud Investigator, Managed Services (req j00176117)',
    summary: `Identity and verification specialist working a national investigation queue. At IRCC I investigate identity discrepancies in GCMS, weighing biographic, biometric, and document evidence to decide whether records belong to the same person, with a documented rationale behind every correction: the same judgment application-fraud review runs on. Three years at Rogers making front-line credit, KYC, and fraud-prevention decisions on credit-check results. False-positive analysis in a concurrent research role. Active Reliability Status.`,
    competencies: ['Identity Investigation', 'Queue-Based Casework', 'Documented Decision Rationale', 'Credit and KYC Decisions', 'Anomaly Detection', 'False-Positive Analysis', 'Excel Pivot Analysis', 'Power BI Reporting'],
    jobs: [
      irccJob([IRCC.identity, IRCC.triage, IRCC.pivot]),
      stelisJob([STELIS.validation, STELIS.brief]),
      rogersJob([ROGERS.kyc_fraud, ROGERS.train, ROGERS.retention]),
    ],
    skills: [LANGS, TOOLS, CLEAR],
    letter: [
      `Working a fraud queue well means holding two things at once: enough speed that the volume clears, and enough rigor that every decision survives review. That balance is my current job. At IRCC's Operations Support Centre I work a national intake of identity cases, investigating discrepancies across biographic, biometric, and travel-document evidence and committing record corrections with the rationale documented, because in federal casework an undocumented decision does not count.`,
      `I should be candid that my title is not fraud investigator. The substance is close: identity conflicts, duplicate and unlinked records, and evidence that does not reconcile are what I investigate daily, and the core judgment, distinguishing an innocent mismatch from a real problem, is the same one application-fraud review runs on. The credit side is not new to me either. For three years at Rogers I was the on-floor authority for credit and KYC decisions, reviewing documentation and credit-check results before any transaction closed, and training new hires to the same standard.`,
      `On the analytical side, I quantify detection quality in my concurrent research role: percent agreement and false-positive rates between a real-time method and its benchmark, in Excel pivot tables. I am comfortable being measured on both productivity and quality, because my current queue runs on exactly that tension.`,
      `I work in English and Arabic natively with working French, hold an active federal Reliability Status, and am based in Ottawa with flexibility for hybrid arrangements. I would be glad to walk through any case pattern in a screen.`,
    ],
  },
];

export const shared = { EDU_BASE, CERTS };
