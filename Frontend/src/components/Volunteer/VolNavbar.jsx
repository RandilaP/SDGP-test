import { Link } from 'react-router-dom';

const VolNavbar = () => {
    return (
        <nav className="bg-gray-800 w-64 flex flex-col h-screen fixed left-0 top-0 z-10">
            <div className="p-4 text-white font-semibold">Volunteer Name</div>
            <ul className="flex flex-col gap-2 p-4">
                <li>
                    <Link
                        to="/volunteer/"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Overview
                    </Link>
                </li>
                <li>
                    <Link
                        to="/volunteer/upcoming-seminars"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Upcoming Seminars
                    </Link>
                </li>
                <li>
                    <Link
                        to="/volunteer/reviews"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link
                        to="/volunteer/past-seminars"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Past Seminars
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default VolNavbar;
