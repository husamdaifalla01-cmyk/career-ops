import { Card, CardBand } from "../components/uozone/Card";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <div className="space-y-5">
      <section className="bg-white rounded-md shadow-uo-card px-6 py-5">
        <h3 className="text-uo-ink font-bold text-[15px] mb-1">Still using H: drive storage?</h3>
        <p className="text-[14px] text-uo-ink">
          Starting this fall, the University will begin phasing out student personal network drives (H: drive).{" "}
          <a href="#" className="text-uo-link underline hover:no-underline">Prepare to switch to OneDrive.</a>
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-5">
          <Card title="Admission file">
            <CardBand>{profile.admission.program}</CardBand>
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-uo-subtle">
                  <th className="text-left font-bold pb-2 border-b border-gray-200">Programs</th>
                  <th className="text-right font-bold pb-2 border-b border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {profile.admission.rows.map((r) => (
                  <tr key={r.program}>
                    <td className="py-2">
                      <a href="#" className="text-uo-ink underline hover:no-underline">{r.program}</a>
                    </td>
                    <td className="py-2 text-right">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card title="@uOttawa.ca email account">
            <div className="flex justify-end">
              <button className="border border-gray-300 bg-gray-50 hover:bg-gray-100 text-[12px] px-3 py-1.5 rounded">
                Open my @uOttawa.ca email account (Outlook)
              </button>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card title="uOttawa card">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 rounded mb-3 flex items-center justify-center text-[12px] text-uo-subtle">
              <UoCardIllustration />
            </div>
            <a href="#" className="block text-uo-link underline hover:no-underline text-[14px] font-bold mb-3">Add flex online!</a>
            <div className="text-[13px] space-y-1">
              <div><strong>Flex plan balance:</strong> $ {profile.flexBalance.toFixed(2)}</div>
              <div><strong>Dining dollars:</strong> $ {profile.diningDollars.toFixed(2)}</div>
              <div><strong>Meal plans:</strong> {profile.mealPlan} | Exp: {profile.mealPlanExpiry}</div>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card title="Self-identification questionnaire">
            <CountMeInIllustration />
          </Card>
          <Card title="Recovery Account">
            <p className="text-[14px] leading-snug">
              Getting locked out of your account is never convenient — set up your{" "}
              <a href="#" className="text-uo-link underline hover:no-underline">recovery account</a> in just two minutes today!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function UoCardIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
      <defs>
        <linearGradient id="card" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c2185b" />
          <stop offset="100%" stopColor="#8B1A2F" />
        </linearGradient>
      </defs>
      <rect x="20" y="35" width="100" height="65" rx="4" fill="url(#card)" />
      <rect x="28" y="42" width="22" height="28" fill="#f3d6a0" />
      <rect x="56" y="50" width="50" height="3" fill="#fff" opacity="0.8" />
      <rect x="56" y="58" width="35" height="3" fill="#fff" opacity="0.6" />
      <circle cx="105" cy="85" r="6" fill="#fff" opacity="0.7" />
      <path d="M150 60 q 10 -8 22 -2 q 10 6 6 18 q -3 9 -14 14 l -8 4 -2 -8 q -10 -2 -14 -10 q -4 -10 4 -16 q 3 -2 6 0" fill="#f5d6c7" stroke="#c89180" />
      <ellipse cx="160" cy="115" rx="22" ry="6" fill="#e8e8e8" />
      <path d="M150 95 L 175 95 L 173 115 L 152 115 Z" fill="#fff" stroke="#c4c4c4" />
      <path d="M155 100 q 7 -4 14 0" fill="#c2185b" />
    </svg>
  );
}

function CountMeInIllustration() {
  const palms = [
    { color: "#e63946", x: 10 },
    { color: "#f4a261", x: 38 },
    { color: "#fcbf49", x: 66 },
    { color: "#7d8c3a", x: 94 },
    { color: "#4cae50", x: 122 },
    { color: "#2196f3", x: 150 },
    { color: "#9c27b0", x: 178 },
    { color: "#e91e63", x: 206 },
  ];
  return (
    <div className="text-center py-2">
      <div className="text-uo-garnetText font-bold text-[26px] leading-none mb-2">Count me in</div>
      <svg viewBox="0 0 240 90" className="w-full h-20">
        {palms.map((p, i) => (
          <g key={i} transform={`translate(${p.x},${15 + (i % 3) * 6})`}>
            <rect x="10" y="35" width="6" height="30" fill={p.color} />
            <path d="M3 36 q 5 -22 10 -22 q 5 0 10 22 Z" fill={p.color} />
            <path d="M5 30 l 4 -10" stroke={p.color} strokeWidth="2" />
            <path d="M21 30 l -4 -10" stroke={p.color} strokeWidth="2" />
            <path d="M13 28 l 0 -12" stroke={p.color} strokeWidth="2" />
          </g>
        ))}
      </svg>
    </div>
  );
}
