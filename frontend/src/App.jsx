import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState(''); // ✅ This must be "setMessage"

  useEffect(() => {
    fetch('http://localhost:7000/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://intern.web.musketeers.dev/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message)) // ✅ Matches above
      .catch(err => console.error("Error fetching:", err));
  }, []);

  return (
    <div>
      <h1>Message( ) from backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
// i love devops
// adding more
