import { useEffect, useState } from 'react';
import SeminarCard from '../../components/School/SeminarCard.jsx';
import axios from "axios";

const PastSeminars = () => {
    const [seminarsData, setSeminarsData] = useState([]);

    useEffect(() => {
        const fetchSeminars = async () => {
            const api = 'http://localhost:4000/api/seminars/';
            try {
                const response = await axios.get(api);
                setSeminarsData(response.data);
            } catch (error) {
                console.error('Error fetching seminars:', error);
            }
        };
        fetchSeminars();
    }, []);

    const today = new Date().toISOString().split('T')[0];

    // Filter out past seminars
    const pastSeminars = seminarsData.filter(seminar => seminar.date < today);
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
