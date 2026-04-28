import { useState } from "react";
import { profile } from "../../data/profile";

export function WelcomeBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-uo-garnet text-white text-[13px]">
      <div className="max-w-uo-container mx-auto px-6 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 py-1.5 hover:underline"
        >
          <span>Welcome {profile.username}</span>
          <span className="text-[10px]">▼</span>
        </button>
      </div>
      {open && (
        <div className="absolute right-0 max-w-uo-container w-full mx-auto">
          <div className="ml-auto bg-white text-uo-ink shadow-uo-card border border-gray-200 w-56 mr-6">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-50 text-[13px]">My profile</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-50 text-[13px]">Settings</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-50 text-[13px]">Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
}
