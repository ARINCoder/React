import { useState, useEffect } from 'react';
import './App.css';
import SearchComponent from './Components/SearchComponents/SearchComponent.jsx';
import UserDetails from './Components/UserDetailsComponent/UserDetails.jsx';

function App() {
  const [username, setUsername] = useState(''); 
  const [userProfile, setUserProfile] = useState({}); 
  function onSearch(username) {
    setUsername(username);
  }

  useEffect(() => {
    async function fetchData() {
      const token = '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';
      const url = `https://api.github.com/users/${username}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      const jsonData = await response.json();
      setUserProfile(jsonData); 
    }

    fetchData(); 
  }, [username]); 

  return (
    <>
      <SearchComponent onSearch={onSearch} />
      <UserDetails UserProfile={userProfile} />
    </>
  );
}

export default App;
