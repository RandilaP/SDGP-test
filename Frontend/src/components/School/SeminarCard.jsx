// eslint-disable-next-line react/prop-types
const SeminarCard = ({ subject, grade, date, time, description }) => {
    // Convert the date string to a Date object
    const eventDate = new Date(date);

    // Get the day, month, and year separately
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString('default', { month: 'long' });
    const year = eventDate.getFullYear();

    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{subject}</h2>
            <p className="text-gray-600 mb-2">
                Grade: {grade} | Date: {month} {day}, {year} | Time: {time}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>
        </div>
    );
};

export default SeminarCard;
