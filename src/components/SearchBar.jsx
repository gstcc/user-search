import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    if (username.trim() === '') {
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
