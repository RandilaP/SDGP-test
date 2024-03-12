export default function VolunteerOverview() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Volunteer Overview</h1>
            <p className="text-lg mb-4">Welcome to your volunteer overview page. Here, you can find important information and statistics about your volunteer activities.</p>
            <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Your Volunteer Information</h2>
                <ul>
                    <li>Name: John Doe</li>
                    <li>Email: john@example.com</li>
                    <li>Location: City, State</li>
                    <li>Total Volunteer Hours: 50</li>
                </ul>
            </div>
        </div>
    );
}
