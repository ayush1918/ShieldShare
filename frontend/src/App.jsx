import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = e => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    if (!file) {
      setMessage('Please select a file first');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/files/upload', formData);
      setMessage(res.data.message + ': ' + res.data.filename);
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ShieldShare - Secure File Upload</h1>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
