import React from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const SeminarCard = ({ id, subject, grade, date, time, description }) => {
    // Convert the date string to a Date object
    const eventDate = new Date(date);

    // Get the day, month, and year separately
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString('default', { month: 'long' });
    const year = eventDate.getFullYear();

    const handleAccept = async () => {
        try {
            const response = await axios.patch(`http://localhost:4000/api/seminars/${id}`, { status: 'accepted' });
            console.log('Seminar accepted:', response.data);
        } catch (error) {
            console.error('Error accepting seminar:', error);
        }
    };

    const handleReject = async () => {
        try {
            const response = await axios.patch(`http://localhost:4000/api/seminars/${id}`, { status: 'rejected' });
            console.log('Seminar rejected:', response.data);
        } catch (error) {
            console.error('Error rejecting seminar:', error);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{subject}</h2>
            <p className="text-gray-600 mb-2">
                Grade: {grade} | Date: {month} {day}, {year} | Time: {time}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex justify-between">
                <button onClick={handleAccept} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Accept
                </button>
                <button onClick={handleReject} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Reject
                </button>
            </div>
        </div>
    );
};

export default SeminarCard;
