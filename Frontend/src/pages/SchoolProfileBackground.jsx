import { Routes, Route } from "react-router-dom";

import SchoolNavbar from "../components/School/SchoolNavbar.jsx";
import SchoolOverview from "./School/SchoolOverview.jsx";
import SendSeminarRequests from "./School/SendSeminarRequests.jsx";
import UpcomingSeminars from "./School/UpcomingSeminars.jsx";
import PastSeminars from "./School/PastSeminars.jsx";

export default function SchoolProfileBackground() {
    return(
       <>
            <SchoolNavbar />
            <Routes>
                <Route path="/school/overview" element={<SchoolOverview />} />
                <Route path="/school/send-seminar-requests" element={<SendSeminarRequests />} />
                <Route path="/school/upcoming-seminars" element={<UpcomingSeminars />} />
                <Route path="/school/past-seminars" element={<PastSeminars />} />
            </Routes>
    </>
    )
}