import { useNavigate } from "react-router-dom";
import { useState } from "react";

const destinations = [
  { value: "", label: "" },
  { value: "/", label: "uoZone Home" },
  { value: "/ps/term-info", label: "Term Information" },
  { value: "/ps/grades", label: "View My Grades" },
];

type Props = { name: string };

export function GoToBar({ name }: Props) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <div className="flex items-start justify-between mb-2">
      <div className="font-bold text-[12px]">{name}</div>
      <div className="flex items-center gap-1">
        <span className="text-[11px]">Go To</span>
        <select
          className="ps-select w-56"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {destinations.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="ps-go"
          onClick={() => value && navigate(value)}
          aria-label="Go"
        >
          »
        </button>
      </div>
    </div>
  );
}
