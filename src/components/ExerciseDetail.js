import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExerciseDetail = () => {
  const { type } = useParams();
  const [step, setStep] = useState(0);

  const instructions = {
    "478": [
      { text: 'Inhale through your nose for 4 seconds', duration: 4000 },
      { text: 'Hold your breath for 7 seconds', duration: 7000 },
      { text: 'Exhale through your mouth for 8 seconds', duration: 8000 }
    ],
    // Add more exercise steps for STAR, Infinity Breaths, etc.
  };

  const currentInstructions = instructions[type] || [];

  const handleNextStep = () => {
    setStep((prevStep) => (prevStep + 1) % currentInstructions.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {currentInstructions.length > 0 ? (
        <>
          <motion.div
            className="text-xl font-semibold"
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {currentInstructions[step].text}
          </motion.div>
          <motion.button
            onClick={handleNextStep}
            className="mt-5 px-4 py-2 bg-indigo-500 text-white rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Next
          </motion.button>
        </>
      ) : (
        <p>No exercise instructions available.</p>
      )}
    </div>
  );
};

export default ExerciseDetail;
