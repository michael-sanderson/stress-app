import React from 'react';
import { useNavigate } from 'react-router-dom';

const DemoEndPage = ({ setBreathActivity }) => {
    const navigate = useNavigate();

    const handleFeedback = (feedback) => {
        console.log('User Feedback:', feedback);
        setBreathActivity(false); // Reset breath activity
        navigate('/'); // Navigate back to landing page or a thank you page
    };

    return (
        <div className="container">
            <h1>Thank you for participating!</h1>
            <h2>Did you feel better?</h2>
            <button onClick={() => handleFeedback('better')}>👍 Yes</button>
            <button onClick={() => handleFeedback('not better')}>👎 No</button>
        </div>
    );
};

export default DemoEndPage;
