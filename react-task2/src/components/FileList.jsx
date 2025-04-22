import React, { useState } from 'react';
import axios from 'axios';
import EditModal from './EditModal';
import '../App.css';

/**
 * Component to display a list of uploaded image files with edit and delete options.
 * 
 * Props:
 *  files: Array of file objects to display
 *  onRefresh: Function to refresh file list after updates/deletes
 */
const FileList = ({ files, onRefresh }) => {
  const [editFile, setEditFile] = useState(null); // Holds the currently selected file for editing

  /**
   * Delete a file by ID after confirmation
   */
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/files/${id}`);
      alert('File deleted successfully.');
      onRefresh(); // Refresh the file list after deletion
    } catch (error) {
      alert('Error deleting the file.');
    }
  };

  return (
    <div className="file-list-container">
      <table className="file-table">
        <thead>
          <tr>
            <th>Thumb</th>
            <th>Name</th>
            <th>Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>
                {/* Display the image using its ID and force refresh by appending modified_date as version */}
                <img
                  src={`http://localhost:5000/api/files/image/${file.id}?v=${new Date(file.modified_date).getTime()}`}
                  alt={file.name}
                  width={50}
                  height={50}
                />
              </td>
              <td>{file.name}</td>
              <td>{new Date(file.upload_date).toLocaleString()}</td>
              <td>
                {/* Edit and Delete buttons */}
                <button className="edit-btn" onClick={() => setEditFile(file)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(file.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show Edit Modal when a file is selected */}
      {editFile && (
        <EditModal
          file={editFile}
          onClose={() => setEditFile(null)} // Close modal
          onUpdate={onRefresh}             // Refresh list after update
        />
      )}
    </div>
  );
};

export default FileList;
