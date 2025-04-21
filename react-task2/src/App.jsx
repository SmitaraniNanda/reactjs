import React, { useEffect, useState } from 'react';
import FileForm from './components/FileForm';
import FileList from './components/FileList';
import axios from 'axios';

const App = () => {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await axios.get('http://localhost:5000/api/files');
    setFiles(res.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="app-container">
      <h1>Image Upload</h1>
      <FileForm onUpload={fetchFiles} />
      <FileList files={files} onRefresh={fetchFiles} />
    </div>
  );
};

export default App;
