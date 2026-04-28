import { Outlet } from "react-router-dom";
import { GoToBar } from "../components/peoplesoft/GoToBar";
import { PsTabs, PsSubTabs } from "../components/peoplesoft/Tabs";
import { profile } from "../data/profile";

const mainTabs = [
  { to: "/ps/search", label: "Search" },
  { to: "/ps/plan", label: "Plan" },
  { to: "/ps/term-info", label: "Enroll" },
  { to: "/ps/my-academics", label: "My Academics" },
];

export function PeopleSoftLayout() {
  return (
    <div className="ps-surface min-h-screen">
      <div className="px-4 pt-3 pb-6 max-w-[1100px]">
        <div className="flex justify-end mb-1">
          <LanguagePill />
        </div>
        <GoToBar name={profile.fullName} />
        <PsTabs tabs={mainTabs} />
        <PsSubTabs
          items={[
            { label: "My Class Schedule" },
            { label: "Add" },
            { label: "Drop" },
            { label: "Swap" },
            { label: "Term Information", current: true },
          ]}
        />
        <hr className="border-t border-[#d9d9d9] my-2" />
        <Outlet />
      </div>
    </div>
  );
}

function LanguagePill() {
  return (
    <div className="flex items-center gap-1 text-[11px]">
      <span>Data Language:</span>
      <select className="ps-select bg-[#D6F2C9] border-[#7AB36B]">
        <option>English</option>
        <option>Français</option>
      </select>
    </div>
  );
}
