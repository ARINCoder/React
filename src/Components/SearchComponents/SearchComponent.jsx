import React from 'react'
import { useState, useEffect } from 'react'
import '../SearchComponents/SearchComponents.css'

const SearchComponent = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const changer = (e) => {
        setUsername(e.target.value);
    };
    const clicker = () => {
        onSearch(username)
    }

    return (
        <div className='Head'>
            <h1> GitHub Search Tool</h1>
            <div className='button'>
                <input type="text"
                    placeholder="Type-in Username"
                    value={username}
                    onChange={changer} />
                <button onClick={clicker}> Search-User </button>
            </div>
        </div>
    )
}

export default SearchComponent