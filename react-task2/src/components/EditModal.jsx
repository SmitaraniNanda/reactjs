import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

/**
 * EditModal component - allows editing file name or replacing the image.
 *
 * Props:
 *  file: object representing the current file
 *  onClose: function to close the modal
 *  onUpdate: function to refresh the file list after update
 */
const EditModal = ({ file, onClose, onUpdate }) => {
  const [name, setName] = useState(file.name);          // Editable file name
  const [selectedFile, setSelectedFile] = useState(null); // Optional new image

  /**
   * Handle the update action
   * Sends updated data name and/or image to backend
   */
  const handleUpdate = async () => {
    if (!name) {
      alert('Name is required');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    if (selectedFile) {
      formData.append('image', selectedFile); // Must match multer field name
    }

    try {
      // Send PUT request to update file info
      await axios.put(`http://localhost:5000/api/files/${file.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onUpdate(); // Refresh parent file list
      onClose();  // Close the modal
    } catch (error) {
      console.error('Update error:', error);
      alert(error?.response?.data?.error || 'Failed to update');
    }
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <h2>Edit File</h2>

        {/* Input for file name */}
        <label>File Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Display current file name */}
        <p>Current File: <strong>{file.filename}</strong></p>

        {/* File input for optional replacement */}
        <label>Change File (optional)</label>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        {/* Action buttons */}
        <div className="edit-modal-buttons">
          <button className="upload-btn" onClick={handleUpdate}>Update</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
