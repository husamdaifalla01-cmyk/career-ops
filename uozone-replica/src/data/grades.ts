export type ClassRow = {
  classCode: string;
  description: string;
  units: number | null;
  grading: string;
  grade: string;
  gradePoints: number | null;
};

type Pair = { fromEnrollment: number | null; cumulative: number };

export type TermStats = {
  unitsTowardGPATaken: Pair;
  unitsTowardGPAPassed: Pair;
  inProgressTowardGPA?: Pair;
  unitsNotForGPATaken: Pair;
  unitsNotForGPAPassed?: Pair;
  inProgressNotForGPA?: Pair;
  unitsTransfer: Pair;
  totalGradePoints: Pair;
  unitsTakenTowardGPA: Pair;
  gpa: { fromEnrollment: number | null; cumulative: number | null };
  academicStanding: string;
};

export type Term = {
  id: string;
  label: string;
  career: string;
  institution: string;
  classes: ClassRow[];
  stats: TermStats;
  hasData: boolean;
};

const PASSING = "D (50%) Passing Grade";
const UG = "Undergraduate";
const UO = "University of Ottawa";

const c = (
  classCode: string,
  description: string,
  grade: string,
  gradePoints: number | null,
  opts: { units?: number | null; grading?: string } = {}
): ClassRow => ({
  classCode,
  description,
  units: opts.units === undefined ? 3.0 : opts.units,
  grading: opts.grading ?? PASSING,
  grade,
  gradePoints,
});

const p = (fromEnrollment: number | null, cumulative: number): Pair => ({
  fromEnrollment,
  cumulative,
});

export const terms: Term[] = [
  {
    id: "2026-winter",
    label: "2026 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [c("ENG 1120", "SELECTED TOPICS LIT. & COMP.", "", null)],
    stats: {
      unitsTowardGPATaken: p(null, 156.0),
      unitsTowardGPAPassed: p(null, 153.0),
      inProgressTowardGPA: p(3.0, 3.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(null, 1212.0),
      unitsTakenTowardGPA: p(null, 156.0),
      gpa: { fromEnrollment: null, cumulative: 7.4 },
      academicStanding: "",
    },
  },
  {
    id: "2025-fall",
    label: "2025 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("AHL 3100", "SPECIAL TOPICS - INTERDIS ARTS", "A-", 24.0),
      c("BIO 2137", "INTRODUCTION TO PLANT SCIENCE", "B+", 21.0),
      c("CHM 2123", "LAB.OF ORGANIC CHEMISTRY II", "DFR", null),
      c("POL 2101", "INTRO TO CANADIAN POLITICS", "A", 27.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 156.0),
      unitsTowardGPAPassed: p(9.0, 153.0),
      inProgressTowardGPA: p(3.0, 3.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(72.0, 1212.0),
      unitsTakenTowardGPA: p(9.0, 153.0),
      gpa: { fromEnrollment: 8.0, cumulative: 7.4 },
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2025-spring-summer",
    label: "2025 Spring/Summer Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("ANP 1107", "HUMAN ANATOMY & PHYSIOLOGY III", "B+", 21.0),
      c("BIO 1150", "INTRO  CELL & MOLECULAR BIO II", "A", 27.0),
      c("CHM 2120", "ORGANIC CHEMISTRY II", "C", 12.0),
      c("MAT 2379", "INTRO TO BIOSTATISTICS", "B+", 21.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 144.0),
      unitsTowardGPAPassed: p(12.0, 144.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(81.0, 1140.0),
      unitsTakenTowardGPA: p(12.0, 144.0),
      gpa: { fromEnrollment: 7.33, cumulative: 7.4 },
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2025-winter",
    label: "2025 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("BCH 4116", "ANALYTICAL BIOCHEMISTRY", "B+", 21.0),
      c("BIO 3350", "PRINCIPLES OF NEUROBIOLOGY", "A-", 24.0),
      c("BIO 3703", "PHYSIOLOGIE ANIMALE I", "A-", 24.0),
      c("CHM 1321", "ORGANIC CHEMISTRY II", "C+", 15.0),
      c("EDU 4104", "TECHNO ED: ALGORITHMS AI & ABC", "A", 27.0),
    ],
    stats: {
      unitsTowardGPATaken: p(15.0, 132.0),
      unitsTowardGPAPassed: p(15.0, 132.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(111.0, 1059.0),
      unitsTakenTowardGPA: p(15.0, 132.0),
      gpa: { fromEnrollment: 8.24, cumulative: 8.605 },
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2024-fall",
    label: "2024 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("BIO 3124", "GENERAL MICROBIOLOGY", "B", 18.0),
      c("BIO 3302", "ANIMAL PHYSIOLOGY II", "B", 18.0),
      c("DLS 1100", "INTRO SECOND LANG TEACHING I", "A+", 30.0),
      c("HIS 1111", "TWENTIETH-CENTURY WLD FRM 1945", "B", 18.0),
      c("MUS 1301", "TOPICS IN MUSIC APPRECIATION I", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(15.0, 117.0),
      unitsTowardGPAPassed: p(15.0, 117.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(114.0, 948.0),
      unitsTakenTowardGPA: p(15.0, 117.0),
      gpa: { fromEnrollment: 8.7, cumulative: 8.7 },
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2024-spring-summer",
    label: "2024 Spring/Summer Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("DVM 2110", "EDU, HEALTH & SOCIAL PROTECT.", "A+", 30.0),
      c("ECH 2300", "INTRO INTL HUMAN RIGHTS LAW", "A", 27.0),
      c("EVS 1501", "INTRODUCTION AUX SCIENCES ENV.", "A+", 30.0),
      c("GEO 1511", "INTRODUCT AUX SYST. TERRESTRES", "A", 27.0),
      c("NUT 1104", "FOOD SCIENCES I", "B+", 21.0),
      c("PSY 1502", "INTRO À LA PSY : APPLICATIONS", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(18.0, 102.0),
      unitsTowardGPAPassed: p(18.0, 102.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(165.0, 834.0),
      unitsTakenTowardGPA: p(18.0, 102.0),
      gpa: { fromEnrollment: 9.17, cumulative: 9.12 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2024-winter",
    label: "2024 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1322", "ORGANIC CHEMISTRY II", "D+", 9.0),
      c("FEM 2104", "GENDER, (DIS)ABILITY & HEALTH", "C", 12.0),
      c("LCM 1502", "OUTILS D'ANALYSE CULTURELLE", "B", 18.0),
      c("MUS 3305", "MUSIC AND CRITICAL THOUGHT", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 84.0),
      unitsTowardGPAPassed: p(12.0, 84.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(69.0, 669.0),
      unitsTakenTowardGPA: p(12.0, 84.0),
      gpa: { fromEnrollment: 6.67, cumulative: 4.7 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2023-fall",
    label: "2023 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("BIO 1540", "INTRO  BIO CELL. & MOLÉCULAIRE", "A+", 30.0),
      c("CHM 1311", "CHEMICAL PRINCIPLES", "B", 18.0),
      c("MAT 2371", "INTRODUCTION TO PROBABILITY", "A", 27.0),
      c("PHI 2390", "PHIL.FEMINISM AND GENDER", "B+", 21.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 72.0),
      unitsTowardGPAPassed: p(12.0, 72.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(96.0, 600.0),
      unitsTakenTowardGPA: p(12.0, 72.0),
      gpa: { fromEnrollment: 8.89, cumulative: 9.13 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2023-spring-summer",
    label: "2023 Spring/Summer Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CRM 1300", "INTRODUCTION TO CRIMINOLOGY", "A-", 24.0),
      c("ESP 1991", "ELEMENTARY SPANISH I", "A-", 24.0),
    ],
    stats: {
      unitsTowardGPATaken: p(6.0, 60.0),
      unitsTowardGPAPassed: p(6.0, 60.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(48.0, 504.0),
      unitsTakenTowardGPA: p(6.0, 60.0),
      gpa: { fromEnrollment: 9.0, cumulative: 9.22 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2023-winter",
    label: "2023 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1321", "ORGANIC CHEMISTRY I", "B+", 21.0),
      c("CHM 2330", "PHY CHEM: INT MOL PROP", "B-", 15.0),
      c("CHM 2354", "ANALYTICAL CHEMISTRY", "B+", 21.0),
      c("SOC 1102", "PRINCIPLES OF SOCIOLOGY II", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 54.0),
      unitsTowardGPAPassed: p(12.0, 54.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(87.0, 456.0),
      unitsTakenTowardGPA: p(12.0, 54.0),
      gpa: { fromEnrollment: 8.0, cumulative: 9.1 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2022-fall",
    label: "2022 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("ARB 3102", "SPEC TOPICS ARAB CAN STUDIES", "B+", 21.0),
      c("CHM 1331", "FUNDAMENTALS OF CHEMISTRY", "A", 27.0),
      c("PHI 2790", "PHILO. FÉMINISME ET GENRE", "B", 18.0),
      c("PHY 1121", "FUNDAMENTALS OF PHYSICS I", "A", 27.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 42.0),
      unitsTowardGPAPassed: p(12.0, 42.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(93.0, 369.0),
      unitsTakenTowardGPA: p(12.0, 42.0),
      gpa: { fromEnrollment: 8.3, cumulative: 9.45 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2022-spring-summer",
    label: "2022 Spring/Summer Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("PHY 1331", "PRINCIPLES OF PHYSICS I", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(3.0, 30.0),
      unitsTowardGPAPassed: p(3.0, 30.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(30.0, 276.0),
      unitsTakenTowardGPA: p(3.0, 30.0),
      gpa: { fromEnrollment: 10.0, cumulative: 9.65 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2022-winter",
    label: "2022 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("BIO 1140", "INTRODUCTION TO CELL BIOLOGY", "A+", 30.0),
      c("MAT 1322", "CALCULUS II", "B+", 21.0),
      c("MUS 1302", "TOP. IN MUSIC APPRECIATION II", "A+", 30.0),
      c("PHY 1122", "FUNDAMENTALS OF PHYSICS II", "B+", 21.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 27.0),
      unitsTowardGPAPassed: p(12.0, 27.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(102.0, 246.0),
      unitsTakenTowardGPA: p(12.0, 27.0),
      gpa: { fromEnrollment: 8.9, cumulative: 9.6 },
      academicStanding: "Good standing",
    },
  },
  {
    id: "2021-fall",
    label: "2021 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1311", "PRINCIPLES OF CHEMISTRY", "A", 27.0),
      c("ITD 1100", "UO-Academic Integrity", "S", null, { units: null, grading: "Integrity in studies" }),
      c("MAT 1320", "CALCULUS I", "A+", 30.0),
      c("MAT 1341", "INTRO. TO LINEAR ALGEBRA", "A+", 30.0),
      c("PHY 1121", "FUNDAMENTALS OF PHYSICS I", "A", 27.0),
      c("SOC 1101", "PRINCIPLES OF SOCIOLOGY", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(15.0, 15.0),
      unitsTowardGPAPassed: p(15.0, 15.0),
      unitsNotForGPATaken: p(null, 0.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(144.0, 144.0),
      unitsTakenTowardGPA: p(15.0, 15.0),
      gpa: { fromEnrollment: 10.0, cumulative: 10.0 },
      academicStanding: "Good standing",
    },
  },
];

export function findTerm(id: string): Term | undefined {
  return terms.find((t) => t.id === id);
}
