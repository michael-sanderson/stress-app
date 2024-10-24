import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import BreathingExercises from './components/BreathingExercises';
import DemoEndPage from './components/DemoEndPage';
import './App.css';

function App() {
    const [userDetails, setUserDetails] = useState({});
    const [breathActivity, setBreathActivity] = useState(false);

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<LandingPage setUserDetails={setUserDetails} />} />
                    <Route path="/home" element={<HomePage userDetails={userDetails} setBreathActivity={setBreathActivity} />} />
                    <Route path="/exercises" element={<BreathingExercises setBreathActivity={setBreathActivity} />} />
                    <Route path="/demo-end" element={<DemoEndPage setBreathActivity={setBreathActivity} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
