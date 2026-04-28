import { NavLink } from "react-router-dom";

type Tab = { to: string; label: string };

export function PsTabs({ tabs }: { tabs: Tab[] }) {
  return (
    <div className="ps-tabs">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end
          className={({ isActive }) => `ps-tab ${isActive ? "active" : ""}`}
        >
          {t.label}
        </NavLink>
      ))}
    </div>
  );
}

type SubTab = { to?: string; label: string; current?: boolean };

export function PsSubTabs({ items }: { items: SubTab[] }) {
  return (
    <div className="ps-subtabs py-1">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.current ? (
            <span className="font-bold">{item.label}</span>
          ) : item.to ? (
            <NavLink to={item.to} className="text-ps-link underline hover:no-underline">
              {item.label}
            </NavLink>
          ) : (
            <a href="#" className="text-ps-link underline hover:no-underline">
              {item.label}
            </a>
          )}
          {i < items.length - 1 && <span className="text-black"> | </span>}
        </span>
      ))}
    </div>
  );
}
