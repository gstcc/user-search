import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = (data) => {
    setUserData(data);
  };

  return (
    <div className='App'>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {userData && <UserCard userData={userData}/>}
    </div>
  );
}

export default App;
