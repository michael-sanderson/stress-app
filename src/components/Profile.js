import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      localStorage.setItem('profile', JSON.stringify({ name, age }));
      navigate('/exercises');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome! Set up your Profile</h1>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 border rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="block w-full p-2 border rounded-md"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Proceed to Exercises
        </button>
      </form>
    </div>
  );
};

export default Profile;
