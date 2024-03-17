import { useEffect, useContext } from 'react';
import SeminarCard from '../../components/Organization/SeminarCard.jsx';
import axios from "axios";
import { SeminarContext } from '../../context/SeminarContext';

const SeminarRequests = () => {
    const { seminars, dispatch } = useContext(SeminarContext);

    useEffect(() => {
        const fetchSeminars = async () => {
            const api = 'http://localhost:4000/api/seminars/';
            try {
                const response = await axios.get(api);
                dispatch({ type: 'SET_SEMINARS', payload: response.data });
            } catch (error) {
                console.error('Error fetching seminars:', error);
            }
        };
        fetchSeminars();
    }, [dispatch]);

    const today = new Date().toISOString().split('T')[0];

    // Filter out upcoming seminars
    const upcomingSeminars = seminars.filter(seminar => seminar.date >= today);
    const pendingSeminars = upcomingSeminars.filter(seminar => seminar.status === 'pending');

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Seminar Requests</h1>
            <div>
                {pendingSeminars.map((seminar) => (
                    <SeminarCard
                        key={seminar._id}
                        id={seminar._id}
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

export default SeminarRequests;
