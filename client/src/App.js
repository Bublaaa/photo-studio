import React, { useEffect, useState } from 'react';
import "./index.css";

function App() {
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();

      })
      .then(data => {
        setBackendData(data.users || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {backendData.map((user, i) => (
            <p key={i}>{user}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
