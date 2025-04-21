import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const FileForm = ({ onUpload }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!image) return alert('Select a PNG or JPEG image');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    await axios.post('http://localhost:5000/api/files', formData);
    setName('');
    setImage(null);
    onUpload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Image name" required />
      <input type="file" accept="image/png,image/jpeg" onChange={e => setImage(e.target.files[0])} required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileForm;
