import { Link } from 'react-router-dom';

const SchoolNavbar = () => {
    return (
        <nav className="bg-gray-800 w-64 flex flex-col h-screen fixed left-0 top-0 z-10">
            <div className="p-4 text-white font-semibold">School Name</div>
            <ul className="flex flex-col gap-2 p-4">
                <li>
                    <Link to="/school/overview" className="text-white py-2 px-4 rounded hover:bg-gray-700">
                        Overview
                    </Link>
                </li>
                <li>
                    <Link to="/school/send-seminar-requests" className="text-white py-2 px-4 rounded hover:bg-gray-700">
                        Send Seminar Requests
                    </Link>
                </li>
                <li>
                    <Link to="/school/upcoming-seminars" className="text-white py-2 px-4 rounded hover:bg-gray-700">
                        Upcoming Seminars
                    </Link>
                </li>
                <li>
                    <Link to="/school/past-seminars" className="text-white py-2 px-4 rounded hover:bg-gray-700">
                        Past Seminars
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SchoolNavbar
