import React from 'react';

export default function SchoolOverview() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">School Overview</h1>
            <p className="text-lg mb-4">Welcome to our  overview page. Here, you can find important information and statistics about our school.</p>
            <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2">School Information</h2>
                <ul>
                    <li>School Name: Example High School</li>
                    <li>Location: City, State</li>
                    <li>Principal: John Doe</li>
                    <li>Total Students: 500</li>
                </ul>
            </div>
        </div>
    );
}
