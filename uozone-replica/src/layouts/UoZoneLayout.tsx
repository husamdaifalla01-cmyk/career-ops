import { Outlet } from "react-router-dom";
import { WelcomeBar } from "../components/uozone/WelcomeBar";
import { BrandHeader } from "../components/uozone/BrandHeader";
import { PrimaryNav } from "../components/uozone/PrimaryNav";

export function UoZoneLayout() {
  return (
    <div className="min-h-screen bg-uo-canvas">
      <WelcomeBar />
      <BrandHeader />
      <PrimaryNav />
      <main className="max-w-uo-container mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
