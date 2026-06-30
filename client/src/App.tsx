import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState<string>('loading...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bookmarks App</h1>
      <p>API status: <strong>{status}</strong></p>
    </div>
  );
}

export default App;
