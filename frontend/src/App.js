import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://php')
      .then(res => res.text())
      .then(setMessage)
      .catch(err => setMessage("Could not connect to backend"));
  }, []);

  return (
    <div>
      <h1>Frontend → Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
