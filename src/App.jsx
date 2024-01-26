import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [input, setInput] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((input) => {
        setInput(input);
      });
  }, []);

  return (
    <div className='nav'>
      {input.slice(0,20).map((photo) => 
        (<div key={photo.id}>
          <h3>{photo.id}</h3>
          <img src={photo.url} alt="" />
        <h4>{photo.title} </h4> 
        </div>
        ))}
    </div>
  );
}

export default App
