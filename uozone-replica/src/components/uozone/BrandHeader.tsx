import { Link } from "react-router-dom";

export function BrandHeader() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-uo-container mx-auto px-6 flex items-end gap-0">
        <Link to="/" className="flex items-end gap-3 py-4 pr-6">
          <UoLogo />
          <span className="text-uo-garnetText font-uo text-[22px] leading-none mb-1">uOttawa</span>
        </Link>
        <Link
          to="/"
          className="bg-uo-red text-white px-6 py-3 text-[20px] font-uo leading-none self-stretch flex items-center"
        >
          uo<strong className="font-bold">Zone</strong>
        </Link>
      </div>
    </div>
  );
}

function UoLogo() {
  return (
    <svg width="44" height="36" viewBox="0 0 44 36" aria-hidden="true">
      <g fill="#8B1A2F">
        <rect x="0" y="32" width="44" height="4" />
        <polygon points="22,0 4,8 40,8" />
        <rect x="6" y="10" width="4" height="22" />
        <rect x="14" y="10" width="4" height="22" />
        <rect x="22" y="10" width="4" height="22" />
        <rect x="30" y="10" width="4" height="22" />
        <rect x="34" y="10" width="4" height="22" />
      </g>
    </svg>
  );
}
