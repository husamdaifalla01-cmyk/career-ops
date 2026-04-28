export type ClassRow = {
  classCode: string;
  description: string;
  units: number;
  grading: string;
  grade: string;
  gradePoints: number | null;
};

export type TermStats = {
  unitsTowardGPA: { taken: number; passed: number };
  unitsNotForGPA: { taken: number; passed: number; transfer: number };
  totalGradePoints: number;
  unitsTakenTowardGPA: number;
  termGPA: number;
  cumulativeUnitsTaken: number;
  cumulativeUnitsPassed: number;
  cumulativeUnitsNotForGPATaken: number;
  cumulativeUnitsNotForGPAPassed: number;
  cumulativeUnitsTransfer: number;
  cumulativeTotalGradePoints: number;
  cumulativeUnitsTakenTowardGPA: number;
  cumulativeGPA: number;
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

export const terms: Term[] = [
  placeholderTerm("2026-winter", "2026 Winter Term"),
  {
    id: "2025-fall",
    label: "2025 Fall Term",
    career: "Undergraduate",
    institution: "University of Ottawa",
    hasData: true,
    classes: [
      { classCode: "BIO 2129", description: "GENETICS", units: 3.0, grading: "D (50%) Passing Grade", grade: "B", gradePoints: 18.0 },
      { classCode: "BIO 2133", description: "ANIMAL FORM & FUNCTION", units: 3.0, grading: "D (50%) Passing Grade", grade: "C+", gradePoints: 15.0 },
      { classCode: "CHM 2123", description: "ORGANIC CHEMISTRY I", units: 3.0, grading: "D (50%) Passing Grade", grade: "C", gradePoints: 12.0 },
      { classCode: "ENG 1112", description: "TECHNICAL REPORT WRITING", units: 3.0, grading: "D (50%) Passing Grade", grade: "B+", gradePoints: 21.0 },
    ],
    stats: {
      unitsTowardGPA: { taken: 12.0, passed: 12.0 },
      unitsNotForGPA: { taken: 0, passed: 0, transfer: 0 },
      totalGradePoints: 66.0,
      unitsTakenTowardGPA: 12.0,
      termGPA: 5.5,
      cumulativeUnitsTaken: 108.0,
      cumulativeUnitsPassed: 87.0,
      cumulativeUnitsNotForGPATaken: 27.0,
      cumulativeUnitsNotForGPAPassed: 0,
      cumulativeUnitsTransfer: 6.0,
      cumulativeTotalGradePoints: 651.0,
      cumulativeUnitsTakenTowardGPA: 108.0,
      cumulativeGPA: 6.03,
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2025-spring-summer",
    label: "2025 Spring/Summer Term",
    career: "Undergraduate",
    institution: "University of Ottawa",
    hasData: true,
    classes: [
      { classCode: "ANP 1107", description: "HUMAN ANATOMY & PHYSIOLOGY III", units: 3.0, grading: "D (50%) Passing Grade", grade: "B+", gradePoints: 21.0 },
      { classCode: "BIO 1140", description: "INTRO  CELL & MOLECULAR BIO", units: 3.0, grading: "D (50%) Passing Grade", grade: "C", gradePoints: 12.0 },
      { classCode: "CHM 2120", description: "ORGANIC CHEMISTRY II", units: 3.0, grading: "D (50%) Passing Grade", grade: "F", gradePoints: null },
      { classCode: "MAT 2379", description: "INTRO TO BIOSTATISTICS", units: 3.0, grading: "D (50%) Passing Grade", grade: "D", gradePoints: 6.0 },
    ],
    stats: {
      unitsTowardGPA: { taken: 12.0, passed: 9.0 },
      unitsNotForGPA: { taken: 0, passed: 0, transfer: 0 },
      totalGradePoints: 39.0,
      unitsTakenTowardGPA: 12.0,
      termGPA: 3.25,
      cumulativeUnitsTaken: 120.0,
      cumulativeUnitsPassed: 96.0,
      cumulativeUnitsNotForGPATaken: 27.0,
      cumulativeUnitsNotForGPAPassed: 0,
      cumulativeUnitsTransfer: 6.0,
      cumulativeTotalGradePoints: 690.0,
      cumulativeUnitsTakenTowardGPA: 120.0,
      cumulativeGPA: 5.75,
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2025-winter",
    label: "2025 Winter Term",
    career: "Undergraduate",
    institution: "University of Ottawa",
    hasData: true,
    classes: [
      { classCode: "BIO 1130", description: "INTRO TO ORGANISMAL BIOLOGY", units: 3.0, grading: "D (50%) Passing Grade", grade: "B", gradePoints: 18.0 },
      { classCode: "CHM 1311", description: "PRINCIPLES OF CHEMISTRY", units: 3.0, grading: "D (50%) Passing Grade", grade: "C+", gradePoints: 15.0 },
      { classCode: "MAT 1322", description: "CALCULUS II", units: 3.0, grading: "D (50%) Passing Grade", grade: "C", gradePoints: 12.0 },
      { classCode: "PHY 1322", description: "FUNDAMENTALS OF PHYSICS II", units: 3.0, grading: "D (50%) Passing Grade", grade: "B-", gradePoints: 16.5 },
    ],
    stats: {
      unitsTowardGPA: { taken: 12.0, passed: 12.0 },
      unitsNotForGPA: { taken: 0, passed: 0, transfer: 0 },
      totalGradePoints: 61.5,
      unitsTakenTowardGPA: 12.0,
      termGPA: 5.13,
      cumulativeUnitsTaken: 96.0,
      cumulativeUnitsPassed: 87.0,
      cumulativeUnitsNotForGPATaken: 27.0,
      cumulativeUnitsNotForGPAPassed: 0,
      cumulativeUnitsTransfer: 6.0,
      cumulativeTotalGradePoints: 612.0,
      cumulativeUnitsTakenTowardGPA: 96.0,
      cumulativeGPA: 6.38,
      academicStanding: "Good academic standing",
    },
  },
  {
    id: "2024-fall",
    label: "2024 Fall Term",
    career: "Undergraduate",
    institution: "University of Ottawa",
    hasData: true,
    classes: [
      { classCode: "BIO 1120", description: "BIOLOGY OF THE CELL", units: 3.0, grading: "D (50%) Passing Grade", grade: "B+", gradePoints: 21.0 },
      { classCode: "CHM 1301", description: "INTRO CHEMISTRY", units: 3.0, grading: "D (50%) Passing Grade", grade: "B", gradePoints: 18.0 },
      { classCode: "MAT 1320", description: "CALCULUS I", units: 3.0, grading: "D (50%) Passing Grade", grade: "C+", gradePoints: 15.0 },
      { classCode: "PHY 1321", description: "FUNDAMENTALS OF PHYSICS I", units: 3.0, grading: "D (50%) Passing Grade", grade: "B", gradePoints: 18.0 },
    ],
    stats: {
      unitsTowardGPA: { taken: 12.0, passed: 12.0 },
      unitsNotForGPA: { taken: 0, passed: 0, transfer: 0 },
      totalGradePoints: 72.0,
      unitsTakenTowardGPA: 12.0,
      termGPA: 6.0,
      cumulativeUnitsTaken: 84.0,
      cumulativeUnitsPassed: 75.0,
      cumulativeUnitsNotForGPATaken: 27.0,
      cumulativeUnitsNotForGPAPassed: 0,
      cumulativeUnitsTransfer: 6.0,
      cumulativeTotalGradePoints: 550.5,
      cumulativeUnitsTakenTowardGPA: 84.0,
      cumulativeGPA: 6.55,
      academicStanding: "Good academic standing",
    },
  },
  placeholderTerm("2024-spring-summer", "2024 Spring/Summer Term"),
  placeholderTerm("2024-winter", "2024 Winter Term"),
  placeholderTerm("2023-fall", "2023 Fall Term"),
  placeholderTerm("2023-spring-summer", "2023 Spring/Summer Term"),
  placeholderTerm("2023-winter", "2023 Winter Term"),
  placeholderTerm("2022-fall", "2022 Fall Term"),
  placeholderTerm("2022-spring-summer", "2022 Spring/Summer Term"),
  placeholderTerm("2022-winter", "2022 Winter Term"),
  placeholderTerm("2021-fall", "2021 Fall Term"),
];

function emptyStats(): TermStats {
  return {
    unitsTowardGPA: { taken: 0, passed: 0 },
    unitsNotForGPA: { taken: 0, passed: 0, transfer: 0 },
    totalGradePoints: 0,
    unitsTakenTowardGPA: 0,
    termGPA: 0,
    cumulativeUnitsTaken: 0,
    cumulativeUnitsPassed: 0,
    cumulativeUnitsNotForGPATaken: 0,
    cumulativeUnitsNotForGPAPassed: 0,
    cumulativeUnitsTransfer: 0,
    cumulativeTotalGradePoints: 0,
    cumulativeUnitsTakenTowardGPA: 0,
    cumulativeGPA: 0,
    academicStanding: "Good academic standing",
  };
}

function placeholderTerm(id: string, label: string): Term {
  return {
    id,
    label,
    career: "Undergraduate",
    institution: "University of Ottawa",
    hasData: false,
    classes: [],
    stats: emptyStats(),
  };
}

export function findTerm(id: string): Term | undefined {
  return terms.find((t) => t.id === id);
}
