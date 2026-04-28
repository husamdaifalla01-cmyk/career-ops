import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section className={`bg-uo-card rounded-md shadow-uo-card overflow-hidden ${className}`}>
      <header className="px-5 py-3 border-b border-gray-200">
        <h2 className="text-uo-garnetText text-[18px] font-uo font-bold leading-none">{title}</h2>
      </header>
      <div className="px-5 py-4 text-[14px] font-uo text-uo-ink">{children}</div>
    </section>
  );
}

export function CardBand({ children }: { children: ReactNode }) {
  return (
    <div className="bg-uo-beigeBand text-white font-bold text-[14px] px-4 py-2.5 -mx-5 -mt-4 mb-3">
      {children}
    </div>
  );
}
