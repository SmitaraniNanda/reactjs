import React, { useState } from 'react';
import axios from 'axios';

/**
 * FileForm component - handles uploading a new image file.
 *
 * Props:
 *  onUpload: function to call after successful upload to refresh the list or close modal
 *  onCancel: function to cancel and close the form/modal
 */
const FileForm = ({ onUpload, onCancel }) => {
  const [name, setName] = useState('');       // Stores image name input
  const [image, setImage] = useState(null);   // Stores selected file

  /**
   * Handles form submission by uploading image to server
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();          // Create a new FormData object
    formData.append('name', name);            // Append name field
    formData.append('image', image);          // Append selected file

    // Send POST request to server to upload file
    await axios.post('http://localhost:5000/api/files', formData);
    onUpload(); // Trigger parent update  refresh file list or close modal
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Add Image</h2>

      {/* Text input for image name */}
      <input
        type="text"
        placeholder="Image Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* File input to choose image */}
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      {/* Upload and Cancel buttons */}
      <div className="form-buttons">
        <button className="upload-btn" type="submit">Upload</button>
        <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default FileForm;
