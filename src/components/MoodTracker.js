import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    localStorage.setItem('userMood', selectedMood);
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">How are you feeling?</h2>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={() => handleMoodSelect('happy')}>😊</button>
        <button onClick={() => handleMoodSelect('okay')}>😐</button>
        <button onClick={() => handleMoodSelect('sad')}>😢</button>
      </div>
      {mood && <p className="mt-4">You are feeling {mood}!</p>}
    </div>
  );
};

export default MoodTracker;
