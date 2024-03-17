import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {SeminarContextProvider} from "./context/SeminarContext.jsx";

import ProfSelect from "./components/common/ProfSelect.jsx";
import SchoolProfileBackground from "./pages/SchoolProfileBackground.jsx";
import VolunteerProfileBackground from "./pages/VolunteerProfileBackground.jsx";
import OrganizationProfileBackground from "./pages/OrganizationProfileBackground.jsx";
function App() {
  return (
    <>
        <SeminarContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<ProfSelect />} />
                <Route path="/school/*" element={<SchoolProfileBackground />} />
                <Route path="/volunteer/*" element={<VolunteerProfileBackground />} />
                <Route path="/organization/*" element={<OrganizationProfileBackground />} />
            </Routes>
        </Router>
        </SeminarContextProvider>
    </>
  );
}

export default App;
