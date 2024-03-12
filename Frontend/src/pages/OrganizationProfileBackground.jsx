import { Routes, Route } from "react-router-dom";

import SchoolNavbar from "../components/School/SchoolNavbar.jsx";
import SchoolOverview from "./School/SchoolOverview.jsx";
import SendSeminarRequests from "./School/SendSeminarRequests.jsx";
import UpcomingSeminars from "./School/UpcomingSeminars.jsx";
import PastSeminars from "./School/PastSeminars.jsx";

export default function ProfileBackground() {
    return(
        <>
            <SchoolNavbar />
            <div className="ml-64"> {/* Adjust margin left to match the width of the SchoolNavbar */}
                <Routes>
                    <Route path="/" element={<SchoolOverview />} />
                    <Route path="/send-seminar-requests" element={<SendSeminarRequests />} />
                    <Route path="/upcoming-seminars" element={<UpcomingSeminars />} />
                    <Route path="/past-seminars" element={<PastSeminars />} />
                </Routes>
            </div>
        </>
    )
}
