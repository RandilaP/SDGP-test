import { useState } from 'react';
import useSeminarContext from '../../hooks/useSeminarContext.js';


const SendSeminarRequests = () => {
    const { dispatch } = useSeminarContext();

    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [expVolCount, setExpVolCount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create seminar request object
        const seminarRequest = {
            subject,
            grade,
            date,
            time,
            expVolCount: parseInt(expVolCount),
            description,
            status: 'pending'
        };

        // Send seminar request to MongoDB
        try {
            const response = await fetch('http://localhost:4000/api/seminars/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(seminarRequest),
            });

            if (response.ok) {
                console.log('Seminar request sent successfully!');
                setSubject('');
                setGrade('');
                setDate('');
                setTime('');
                setExpVolCount('');
                setDescription('');
                dispatch({ type: 'CREATE_SEMINAR', payload: seminarRequest });
            } else {
                console.error('Failed to send seminar request');
            }
        } catch (error) {
            console.error('Error sending seminar request:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                    Subject:
                </label>
                <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                    Grade:
                </label>
                <input
                    id="grade"
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Date:
                </label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Time:
                </label>
                <input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expVolCount">
                    Expected Volunteer Count:
                </label>
                <input
                    id="expVolCount"
                    type="number"
                    value={expVolCount}
                    onChange={(e) => setExpVolCount(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    );
};

export default SendSeminarRequests;
