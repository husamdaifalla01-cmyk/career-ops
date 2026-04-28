import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { terms } from "../data/grades";
import { PsButton } from "../components/peoplesoft/Button";

export default function TermSelector() {
  const [selected, setSelected] = useState(terms[0].id);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-[12px] font-normal mb-2">View My Grades</h2>

      <div className="bg-[#f4f4f4] border border-[#d9d9d9] mb-3">
        <div className="ps-section-header" style={{ borderBottom: "1px solid #d9d9d9" }}>
          Select a term then select Continue.
        </div>
        <table className="ps-table w-full bg-white">
          <thead>
            <tr>
              <th className="w-6"></th>
              <th className="w-48">Term</th>
              <th className="w-40">Career</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            {terms.map((t, i) => (
              <tr key={t.id} className={i % 2 === 1 ? "alt" : ""}>
                <td>
                  <input
                    type="radio"
                    name="term"
                    className="ps-radio"
                    checked={selected === t.id}
                    onChange={() => setSelected(t.id)}
                  />
                </td>
                <td>{t.label}</td>
                <td>{t.career}</td>
                <td>{t.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <PsButton onClick={() => navigate(`/ps/grades/${selected}`)}>Continue</PsButton>
      </div>

      <div className="mt-6 flex items-center gap-1 text-[11px]">
        <span aria-hidden>▲</span>
        <a href="#top" className="text-ps-link underline hover:no-underline">Go to top</a>
      </div>
    </div>
  );
}
