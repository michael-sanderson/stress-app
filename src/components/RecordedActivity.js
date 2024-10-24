import React from 'react';

const RecordedActivity = ({ breathData }) => {
    return (
        <div className="container">
            <h1>Recorded Breathing Activities</h1>
            {breathData.length > 0 ? (
                <ul>
                    {breathData.map((action, index) => (
                        <li key={index}>{action}</li>
                    ))}
                </ul>
            ) : (
                <p>No recorded activities yet.</p>
            )}
        </div>
    );
};

export default RecordedActivity;
