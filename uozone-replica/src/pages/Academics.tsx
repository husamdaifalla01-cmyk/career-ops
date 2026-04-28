import { Link } from "react-router-dom";
import { Card } from "../components/uozone/Card";

export default function Academics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <Card title="Enrolment">
        <ul className="space-y-2 text-[14px]">
          <li><Link to="/ps/term-info" className="text-uo-link underline hover:no-underline">View My Grades</Link></li>
          <li><Link to="/ps/term-info" className="text-uo-link underline hover:no-underline">My Class Schedule</Link></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Enrol in classes</a></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Drop a class</a></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Swap a class</a></li>
        </ul>
      </Card>
      <Card title="Programs and courses">
        <ul className="space-y-2 text-[14px]">
          <li><a href="#" className="text-uo-link underline hover:no-underline">Course catalogue</a></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Program requirements</a></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Academic calendar</a></li>
        </ul>
      </Card>
      <Card title="Records">
        <ul className="space-y-2 text-[14px]">
          <li><a href="#" className="text-uo-link underline hover:no-underline">Order an official transcript</a></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Letter of confirmation</a></li>
          <li><a href="#" className="text-uo-link underline hover:no-underline">Tuition tax receipts</a></li>
        </ul>
      </Card>
    </div>
  );
}
