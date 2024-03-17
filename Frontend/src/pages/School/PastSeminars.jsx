import { useEffect } from 'react';
import SeminarCard from '../../components/School/SeminarCard.jsx';
import axios from "axios";
import useSeminarContext from '../../hooks/useSeminarContext.js';

const PastSeminars = () => {
    const { seminars, dispatch } = useSeminarContext();

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/seminars/');
                dispatch({ type: 'SET_SEMINARS', payload: response.data });
            } catch (error) {
                console.error('Error fetching seminars:', error);
            }
        };
        fetchSeminars();
    }, [dispatch]);

    const today = new Date().toISOString().split('T')[0];

    // Filter out past seminars
    const pastSeminars = seminars ? seminars.filter(seminar => seminar.date < today) : [];
    const acceptedSeminars = pastSeminars.filter(seminar => seminar.status === 'accepted');

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Past Seminars</h1>
            <div>
                {acceptedSeminars.map((seminar) => (
                    <SeminarCard
                        key={seminar._id}
                        subject={seminar.subject}
                        grade={seminar.grade}
                        date={seminar.date}
                        time={seminar.time}
                        description={seminar.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default PastSeminars;
