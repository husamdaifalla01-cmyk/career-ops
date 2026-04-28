import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services for you", end: false },
  { to: "/academics", label: "Academics and courses", end: false },
  { to: "/finances", label: "Finances and jobs", end: false },
  { to: "/applications", label: "Applications", end: false },
];

export function PrimaryNav() {
  return (
    <nav className="w-full bg-uo-khaki">
      <div className="max-w-uo-container mx-auto px-6 flex">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              [
                "px-6 py-3 text-white text-[14px] font-uo",
                isActive ? "bg-uo-khakiActive" : "hover:bg-uo-khakiDark",
              ].join(" ")
            }
          >
            {t.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
