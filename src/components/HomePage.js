import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const moodOptions = [
    { value: 1, label: '😢' },
    { value: 2, label: '😞' },
    { value: 3, label: '😟' },
    { value: 4, label: '😐' },
    { value: 5, label: '😶' },
    { value: 6, label: '😊' },
    { value: 7, label: '😁' },
    { value: 8, label: '😄' },
    { value: 9, label: '😃' },
    { value: 10, label: '😇' },
];

const HomePage = ({ userDetails, setBreathActivity }) => {
    const [lastMood, setLastMood] = useState(null);
    const [moodRating, setMoodRating] = useState(0);
    const navigate = useNavigate();

    const handleMoodSubmit = (e) => {
        e.preventDefault();
        setLastMood(moodRating);

        // If mood is 5 or lower, suggest a breathing exercise
        if (moodRating <= 5) {
            setBreathActivity(true);
            alert('Your mood is low. Would you like to do a breathing exercise?');
            navigate('/exercises');
        } else {
            // Handle other logic if mood is good (could include positive feedback)
        }
    };

    return (
        <div className="container">
            <h1>Welcome, {userDetails.name}!</h1>
            <h2>Your Last Mood: {lastMood || 'None recorded'}</h2>
            <form onSubmit={handleMoodSubmit}>
                <label htmlFor="mood">Rate your mood (1-10):</label>
                <div className="mood-options">
                    {moodOptions.map((option) => (
                        <label key={option.value}>
                            <input
                                type="radio"
                                name="mood"
                                value={option.value}
                                onChange={(e) => setMoodRating(Number(e.target.value))}
                                required
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
                <button type="submit">Record Mood</button>
            </form>
            <h2>Your Breathing Activity:</h2>
            {/* Add any additional display for breathing history */}
        </div>
    );
};

export default HomePage;
