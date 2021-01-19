import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [data, setData] = useState({ profile: [] });

    useEffect(() => {
      fetch('https://api.enye.tech/v1/challenge/records')
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
  
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
