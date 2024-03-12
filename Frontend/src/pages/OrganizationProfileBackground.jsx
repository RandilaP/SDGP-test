import { Routes, Route } from "react-router-dom";

import OrgNavbar from "../components/Organization/OrgNavbar.jsx";
import OrganizationOverview from "./Organization/OrganizationOverview.jsx";
import PastSeminars from "./Organization/PastSeminars.jsx";
import UpcomingSeminars from "./Organization/UpcomingSeminars.jsx";
import SeminarRequests from "./Organization/SeminarRequests.jsx";
import VolunteerRequests from "./Organization/VolunteerRequests.jsx";

export default function OrganizationProfileBackground() {
    return(
        <>x
            <OrgNavbar />
            <div className="ml-64">
                <Routes>
                    <Route path="/" element={<OrganizationOverview />} />
                    <Route path="/seminar-requests" element={<SeminarRequests />} />
                    <Route path="/volunteer-requests" element={<VolunteerRequests />} />
                    <Route path="/upcoming-seminars" element={<UpcomingSeminars />} />
                    <Route path="/past-seminars" element={<PastSeminars />} />
                </Routes>
            </div>
        </>
    )
}
