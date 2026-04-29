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
      unitsTowardGPATaken: p(null, 126.0),
      unitsTowardGPAPassed: p(null, 99.0),
      inProgressTowardGPA: p(3.0, 3.0),
      unitsNotForGPATaken: p(null, 27.0),
      inProgressNotForGPA: p(null, 6.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(null, 714.0),
      unitsTakenTowardGPA: p(null, 126.0),
      gpa: { fromEnrollment: null, cumulative: 5.67 },
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
      c("BIO 2137", "INTRODUCTION TO PLANT SCIENCE", "F", null),
      c("CHM 2123", "LAB.OF ORGANIC CHEMISTRY II", "AEC", null),
      c("POL 2101", "INTRO TO CANADIAN POLITICS", "DFR", null),
    ],
    stats: {
      unitsTowardGPATaken: p(6.0, 126.0),
      unitsTowardGPAPassed: p(3.0, 99.0),
      unitsNotForGPATaken: p(null, 27.0),
      inProgressNotForGPA: p(6.0, 6.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(24.0, 714.0),
      unitsTakenTowardGPA: p(6.0, 126.0),
      gpa: { fromEnrollment: 4.0, cumulative: 5.67 },
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
      c("BIO 1140", "INTRO  CELL & MOLECULAR BIO", "C", 12.0),
      c("CHM 2120", "ORGANIC CHEMISTRY II", "F", null),
      c("MAT 2379", "INTRO TO BIOSTATISTICS", "D", 6.0),
    ],
    stats: {
      unitsTowardGPATaken: p(12.0, 120.0),
      unitsTowardGPAPassed: p(9.0, 96.0),
      unitsNotForGPATaken: p(null, 27.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(39.0, 690.0),
      unitsTakenTowardGPA: p(12.0, 120.0),
      gpa: { fromEnrollment: 3.25, cumulative: 5.75 },
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
      c("CHM 1321", "ORGANIC CHEMISTRY I", "E", 3.0),
      c("EDU 4104", "TECHNO ED: ALGORITHMS AI & ABC", "A", 27.0),
    ],
    stats: {
      unitsTowardGPATaken: p(15.0, 108.0),
      unitsTowardGPAPassed: p(12.0, 87.0),
      unitsNotForGPATaken: p(null, 27.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(99.0, 651.0),
      unitsTakenTowardGPA: p(15.0, 108.0),
      gpa: { fromEnrollment: 6.6, cumulative: 6.03 },
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
      c("BIO 3124", "GENERAL MICROBIOLOGY", "D+", 9.0),
      c("BIO 3302", "ANIMAL PHYSIOLOGY II", "B", 18.0),
      c("DLS 1100", "INTRO SECOND LANG TEACHING I", "A+", 30.0),
      c("HIS 1111", "TWENTIETH-CENTURY WLD FRM 1945", "B", 18.0),
      c("MUS 1301", "TOPICS IN MUSIC APPRECIATION I", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(15.0, 93.0),
      unitsTowardGPAPassed: p(15.0, 75.0),
      unitsNotForGPATaken: p(null, 27.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(105.0, 552.0),
      unitsTakenTowardGPA: p(15.0, 93.0),
      gpa: { fromEnrollment: 7.0, cumulative: 5.94 },
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
      unitsTowardGPATaken: p(18.0, 78.0),
      unitsTowardGPAPassed: p(18.0, 60.0),
      unitsNotForGPATaken: p(null, 27.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(165.0, 447.0),
      unitsTakenTowardGPA: p(18.0, 78.0),
      gpa: { fromEnrollment: 9.17, cumulative: 5.73 },
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2024-winter",
    label: "2024 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1321", "ORGANIC CHEMISTRY I", "E", 3.0),
      c("FEM 2104", "GENDER, (DIS)ABILITY & HEALTH", "C", 12.0),
      c("LCM 1502", "OUTILS D'ANALYSE CULTURELLE", "B", 18.0),
      c("MUS 3305", "MUSIC AND CRITICAL THOUGHT", "A+", 30.0),
    ],
    stats: {
      unitsTowardGPATaken: p(9.0, 60.0),
      unitsTowardGPAPassed: p(9.0, 42.0),
      unitsNotForGPATaken: p(3.0, 27.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(60.0, 282.0),
      unitsTakenTowardGPA: p(9.0, 60.0),
      gpa: { fromEnrollment: 6.67, cumulative: 4.7 },
      academicStanding: "Must withdraw from the program",
    },
  },
  {
    id: "2023-fall",
    label: "2023 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("BIO 1540", "INTRO  BIO CELL. & MOLÉCULAIRE", "D+", 9.0),
      c("CHM 1311", "PRINCIPLES OF CHEMISTRY", "E", 3.0),
      c("MAT 2371", "INTRODUCTION TO PROBABILITY", "F", null),
      c("PHI 2390", "PHIL.FEMINISM AND GENDER", "D+", 9.0),
    ],
    stats: {
      unitsTowardGPATaken: p(9.0, 51.0),
      unitsTowardGPAPassed: p(3.0, 33.0),
      unitsNotForGPATaken: p(3.0, 24.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(12.0, 222.0),
      unitsTakenTowardGPA: p(9.0, 51.0),
      gpa: { fromEnrollment: 1.33, cumulative: 4.35 },
      academicStanding: "On academic probation",
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
      unitsTowardGPATaken: p(6.0, 42.0),
      unitsTowardGPAPassed: p(6.0, 30.0),
      unitsNotForGPATaken: p(null, 21.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(48.0, 210.0),
      unitsTakenTowardGPA: p(6.0, 42.0),
      gpa: { fromEnrollment: 8.0, cumulative: 5.0 },
      academicStanding: "Placed on academic probation",
    },
  },
  {
    id: "2023-winter",
    label: "2023 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1321", "ORGANIC CHEMISTRY I", "F", null),
      c("CHM 2330", "PHY CHEM: INT MOL PROP", "F", null),
      c("CHM 2354", "ANALYTICAL CHEMISTRY", "D", 6.0),
      c("SOC 1101", "PRINCIPLES OF SOCIOLOGY", "EIN", null),
    ],
    stats: {
      unitsTowardGPATaken: p(9.0, 36.0),
      unitsTowardGPAPassed: p(3.0, 24.0),
      unitsNotForGPATaken: p(3.0, 21.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(6.0, 162.0),
      unitsTakenTowardGPA: p(9.0, 36.0),
      gpa: { fromEnrollment: 0.67, cumulative: 4.5 },
      academicStanding: "Academic probation extended for one term",
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
      c("CHM 1311", "PRINCIPLES OF CHEMISTRY", "EIN", null),
      c("PHI 2790", "PHILO. FÉMINISME ET GENRE", "C", 12.0),
      c("PHY 1121", "FUNDAMENTALS OF PHYSICS I", "ABS", null),
    ],
    stats: {
      unitsTowardGPATaken: p(6.0, 27.0),
      unitsTowardGPAPassed: p(3.0, 21.0),
      unitsNotForGPATaken: p(6.0, 18.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(21.0, 156.0),
      unitsTakenTowardGPA: p(6.0, 27.0),
      gpa: { fromEnrollment: 3.5, cumulative: 5.78 },
      academicStanding: "On academic probation",
    },
  },
  {
    id: "2022-spring-summer",
    label: "2022 Spring/Summer Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1311", "PRINCIPLES OF CHEMISTRY", "EIN", null),
      c("PHY 1331", "PRINCIPLES OF PHYSICS I", "C+", 15.0),
    ],
    stats: {
      unitsTowardGPATaken: p(6.0, 21.0),
      unitsTowardGPAPassed: p(3.0, 18.0),
      unitsNotForGPATaken: p(null, 12.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(15.0, 135.0),
      unitsTakenTowardGPA: p(6.0, 21.0),
      gpa: { fromEnrollment: 2.5, cumulative: 6.43 },
      academicStanding: "On academic probation",
    },
  },
  {
    id: "2022-winter",
    label: "2022 Winter Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("BIO 1140", "INTRODUCTION TO CELL BIOLOGY", "EIN", null),
      c("MAT 1322", "CALCULUS II", "B+", 21.0),
      c("MUS 1302", "TOP. IN MUSIC APPRECIATION II", "A+", 30.0),
      c("PHY 1122", "FUNDAMENTALS OF PHYSICS II", "D+", 9.0),
    ],
    stats: {
      unitsTowardGPATaken: p(9.0, 15.0),
      unitsTowardGPAPassed: p(9.0, 15.0),
      unitsNotForGPATaken: p(3.0, 12.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(60.0, 120.0),
      unitsTakenTowardGPA: p(9.0, 15.0),
      gpa: { fromEnrollment: 6.67, cumulative: 8.0 },
      academicStanding: "Placed on academic probation",
    },
  },
  {
    id: "2021-fall",
    label: "2021 Fall Term",
    career: UG,
    institution: UO,
    hasData: true,
    classes: [
      c("CHM 1311", "PRINCIPLES OF CHEMISTRY", "F", null),
      c("ITD 1100", "UO-Academic Integrity", "S", null, { units: null, grading: "Integrity in studies" }),
      c("MAT 1320", "CALCULUS I", "A+", 30.0),
      c("MAT 1341", "INTRO. TO LINEAR ALGEBRA", "A+", 30.0),
      c("PHY 1121", "FUNDAMENTALS OF PHYSICS I", "E", 3.0),
      c("SOC 1101", "PRINCIPLES OF SOCIOLOGY", "D+", 9.0),
    ],
    stats: {
      unitsTowardGPATaken: p(6.0, 6.0),
      unitsTowardGPAPassed: p(6.0, 6.0),
      unitsNotForGPATaken: p(9.0, 9.0),
      unitsTransfer: p(null, 6.0),
      totalGradePoints: p(60.0, 60.0),
      unitsTakenTowardGPA: p(6.0, 6.0),
      gpa: { fromEnrollment: 10.0, cumulative: 10.0 },
      academicStanding: "Warning–at risk of probation",
    },
  },
];

export function findTerm(id: string): Term | undefined {
  return terms.find((t) => t.id === id);
}
