import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UoZoneLayout } from "./layouts/UoZoneLayout";
import { PeopleSoftLayout } from "./layouts/PeopleSoftLayout";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import ComingSoon from "./pages/ComingSoon";
import TermSelector from "./pages/TermSelector";
import ViewGrades from "./pages/ViewGrades";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UoZoneLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ComingSoon title="Services for you" />} />
          <Route path="academics" element={<Academics />} />
          <Route path="finances" element={<ComingSoon title="Finances and jobs" />} />
          <Route path="applications" element={<ComingSoon title="Applications" />} />
        </Route>

        <Route path="ps" element={<PeopleSoftLayout />}>
          <Route index element={<Navigate to="/ps/term-info" replace />} />
          <Route path="term-info" element={<TermSelector />} />
          <Route path="grades" element={<Navigate to="/ps/term-info" replace />} />
          <Route path="grades/:termId" element={<ViewGrades />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
