import { Routes, Route } from "react-router-dom";

import VolNavbar from "../components/Volunteer/VolNavbar.jsx";
import VolunteerOverview from "./Volunteer/VolunteerOverview.jsx";
import PastSeminars from "./Volunteer/PastSeminars.jsx";
import UpcomingSeminars from "./Volunteer/UpcomingSeminars.jsx";
import ReviewBackground from "./Volunteer/ReviewBackground.jsx";

export default function VolunteerProfileBackground() {
    return(
        <>
            <VolNavbar />
            <div className="ml-64"> {/* Adjust margin left to match the width of the SchoolNavbar */}
                <Routes>
                    <Route path="/" element={<VolunteerOverview />} />
                    <Route path="/upcoming-seminars" element={<UpcomingSeminars />} />
                    <Route path="/past-seminars" element={<PastSeminars />} />
                    <Route path="/reviews" element={<ReviewBackground />} />
                </Routes>
            </div>
        </>
    )
}
