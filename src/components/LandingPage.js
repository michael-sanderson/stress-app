import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ setUserDetails }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetails({ name, age });
        navigate('/home'); // Navigate to the home page
    };

    return (
        <div className="container">
            <h1>Welcome to the Breathing App!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <button type="submit">Enter</button>
            </form>
        </div>
    );
};

export default LandingPage;
