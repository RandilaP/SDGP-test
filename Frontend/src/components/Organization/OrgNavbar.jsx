// import React from 'react';
import { Link } from 'react-router-dom';

const OrgNavbar = () => {
    return (
        <nav className="bg-gray-800 w-64 flex h-screen flex-col fixed left-0 top-0 z-10">
            <div className="p-4 text-white font-semibold">Volunteer Name</div>
            <div className="mb-4">
                <Link
                    to="/"
                    className="text-white py-2 px-4 rounded hover:bg-gray-700 block"
                >
                    Main Menu
                </Link>
            </div>
            <ul className="flex flex-col gap-2 p-4">
                <li>
                    <Link
                        to="/organization/"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Overview
                    </Link>
                </li>
                <li>
                    <Link
                        to="/organization/volunteer-requests"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Volunteer Requests
                    </Link>
                </li>
                <li>
                    <Link
                        to="/organization/seminar-requests"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Seminar Requests
                    </Link>
                </li>
                <li>
                    <Link
                        to="/organization/upcoming-seminars"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Upcoming Seminars
                    </Link>
                </li>
                <li>
                    <Link
                        to="/organization/past-seminars"
                        className="text-white py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Past Seminars
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default OrgNavbar;
