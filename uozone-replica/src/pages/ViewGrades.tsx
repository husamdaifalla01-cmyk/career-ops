import { useNavigate, useParams } from "react-router-dom";
import { findTerm } from "../data/grades";
import { PsButton } from "../components/peoplesoft/Button";

export default function ViewGrades() {
  const { termId } = useParams<{ termId: string }>();
  const navigate = useNavigate();
  const term = findTerm(termId ?? "");

  if (!term) {
    return <p>Term not found.</p>;
  }

  return (
    <div>
      <h2 className="text-[12px] font-normal mb-3">View My Grades</h2>

      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="text-[12px] font-bold leading-tight">
          {term.label} | {term.career} | {term.institution}
        </div>
        <PsButton onClick={() => navigate("/ps/term-info")}>Change Term</PsButton>
      </div>

      {!term.hasData ? (
        <p className="text-[11px] italic">No grades posted for this term yet.</p>
      ) : (
        <>
          <ClassGrades term={term} />
          <TermStatistics term={term} />
        </>
      )}

      <div className="flex justify-end mt-6">
        <a href="#" className="text-ps-link underline hover:no-underline text-[11px]">Printer Friendly Page</a>
      </div>
    </div>
  );
}

function ClassGrades({ term }: { term: NonNullable<ReturnType<typeof findTerm>> }) {
  return (
    <div className="mb-6">
      <SectionTitle>Class Grades - {term.label}</SectionTitle>
      <div className="border border-[#d9d9d9] p-2 bg-white">
        <div className="inline-flex border-b border-[#7e9ab8] mb-0">
          <div className="bg-[#a6bad9] border border-[#7e9ab8] border-b-0 px-3 py-1 text-[11px] font-bold rounded-t">Official Grades</div>
        </div>
        <table className="ps-table w-full">
          <thead>
            <tr>
              <th className="w-20 text-center">Class</th>
              <th>Description</th>
              <th className="w-12 text-center">Units</th>
              <th className="w-32">Grading</th>
              <th className="w-12 text-center">Grade</th>
              <th className="w-20 text-right">Grade Points</th>
            </tr>
          </thead>
          <tbody>
            {term.classes.map((c) => (
              <tr key={c.classCode}>
                <td><a href="#" className="text-ps-link underline hover:no-underline">{c.classCode}</a></td>
                <td>{c.description}</td>
                <td className="text-right">{c.units.toFixed(2)}</td>
                <td>{c.grading}</td>
                <td className="font-bold">{c.grade}</td>
                <td className="text-right">{c.gradePoints !== null ? c.gradePoints.toFixed(3) : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TermStatistics({ term }: { term: NonNullable<ReturnType<typeof findTerm>> }) {
  const s = term.stats;
  return (
    <div>
      <SectionTitle>Term Statistics - {term.label}</SectionTitle>
      <table className="ps-table w-full">
        <thead>
          <tr>
            <th>Description</th>
            <th className="w-44 text-right">From Enrollment</th>
            <th className="w-44 text-right">Cumulative Total</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="font-bold">Units Toward GPA:</td><td></td><td></td></tr>
          <tr><td className="pl-4">Taken</td><td className="text-right">{s.unitsTowardGPA.taken.toFixed(3)}</td><td className="text-right">{s.cumulativeUnitsTaken.toFixed(3)}</td></tr>
          <tr><td className="pl-4">Passed</td><td className="text-right">{s.unitsTowardGPA.passed.toFixed(3)}</td><td className="text-right">{s.cumulativeUnitsPassed.toFixed(3)}</td></tr>
          <tr><td colSpan={3}>&nbsp;</td></tr>
          <tr><td className="font-bold">Units Not for GPA:</td><td></td><td></td></tr>
          <tr><td className="pl-4">Taken</td><td></td><td className="text-right">{s.cumulativeUnitsNotForGPATaken.toFixed(3)}</td></tr>
          <tr><td className="pl-4">Passed</td><td></td><td></td></tr>
          <tr><td className="pl-4">Transfer Units</td><td></td><td className="text-right">{s.cumulativeUnitsTransfer.toFixed(3)}</td></tr>
          <tr><td colSpan={3}>&nbsp;</td></tr>
          <tr><td className="font-bold">GPA Calculation</td><td></td><td></td></tr>
          <tr><td className="font-bold">Total Grade Points</td><td className="text-right">{s.totalGradePoints.toFixed(3)}</td><td className="text-right">{s.cumulativeTotalGradePoints.toFixed(3)}</td></tr>
          <tr><td>/&nbsp;&nbsp;<strong>Units Taken Toward GPA</strong></td><td className="text-right">{s.unitsTakenTowardGPA.toFixed(3)}</td><td className="text-right">{s.cumulativeUnitsTakenTowardGPA.toFixed(3)}</td></tr>
          <tr><td className="font-bold">= GPA</td><td className="text-right font-bold">{s.termGPA.toFixed(3)}</td><td className="text-right font-bold">{s.cumulativeGPA.toFixed(3)}</td></tr>
        </tbody>
      </table>
      <div className="mt-3 text-[11px]">
        <span className="font-bold">Academic Standing</span>
        <span className="ml-3">{s.academicStanding}</span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-ps-sectionHeader font-bold text-[12px] mb-1 pb-1" style={{ borderBottom: "1px solid #d9d9d9" }}>
      <span aria-hidden className="inline-block mr-1">▼</span>
      {children}
    </div>
  );
}
