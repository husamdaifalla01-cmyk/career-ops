import { useState, type ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function PsSection({ title, children, defaultOpen = true }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`ps-section-header w-full text-left ${open ? "" : "collapsed"}`}
      >
        {title}
      </button>
      {open && <div className="border border-t-0 border-[#d9d9d9] p-2">{children}</div>}
    </div>
  );
}
