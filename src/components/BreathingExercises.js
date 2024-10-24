import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BreathingExercises = ({ setBreathActivity, setLastMood }) => {
    const [isActive, setIsActive] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [breathCount, setBreathCount] = useState(0);
    const [totalLoops, setTotalLoops] = useState(3); // Loop 3 times
    const [progress, setProgress] = useState(0); // Progress for the progress bar
    const navigate = useNavigate();

    const steps = [
        { action: "Inhale", duration: 4000 }, // 4 seconds inhale
        { action: "Hold", duration: 7000 }, // 7 seconds hold
        { action: "Exhale", duration: 8000 } // 8 seconds exhale
    ];

    const breathingName = "4-7-8 Breathing"; // The name of the breathing activity

    useEffect(() => {
        let timer;

        if (isActive) {
            if (currentStep === steps.length) {
                setBreathCount((prev) => prev + 1); // Increment loop count
                if (breathCount + 1 === totalLoops) {
                    setIsActive(false);
                    setBreathActivity(breathingName); // Set the name of the breathing activity
                    setLastMood(null); // Optional: Reset last mood
                    navigate('/'); // Go back to home page
                } else {
                    setCurrentStep(0); // Reset step for next loop
                }
            } else {
                timer = setTimeout(() => {
                    setCurrentStep((prev) => prev + 1); // Move to next step
                }, steps[currentStep].duration);

                // Update progress
                setProgress(((breathCount * steps.length + currentStep + 1) / (totalLoops * steps.length)) * 100);
            }
        }

        return () => clearTimeout(timer);
    }, [isActive, currentStep, breathCount, totalLoops]);

    const handleStart = () => {
        setIsActive(true);
        setCurrentStep(0);
        setProgress(0); // Reset progress on start
    };

    return (
        <div className="breathing-container">
            <h2 className="breathing-exercise">{breathingName}</h2> {/* Display the name of the breathing activity */}
            {isActive ? (
                <div>
                    <div className="breathing-indicator">{steps[currentStep]?.action}</div>
                    <p>Duration: {steps[currentStep]?.duration / 1000} seconds</p>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            ) : (
                <button onClick={handleStart}>Start Breathing Exercise</button>
            )}
        </div>
    );
};

export default BreathingExercises;
