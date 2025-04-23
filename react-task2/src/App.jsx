import React, { useEffect, useState } from 'react';
import FileForm from './components/FileForm';  
import FileList from './components/FileList';  
import axios from 'axios';  
import './App.css';  

const App = () => {
  // State to hold the list of uploaded files
  const [files, setFiles] = useState([]);
  
  // State to control visibility of the modal for file upload
  const [showModal, setShowModal] = useState(false);

  /**
   * Fetches all files from the server
   * Called when the component mounts and after uploading a new file
   */
  const fetchFiles = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/files');
      setFiles(res.data); // Updates the files state with the fetched data
    } catch (error) {
      console.error('Error fetching files:', error); // Error handling
    }
  };

  // Fetch files when the component is first mounted
  useEffect(() => {
    fetchFiles();
  }, []);  // Empty dependency array ensures this runs only once, on component mount

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <h1>Image Upload</h1>

      {/* Button to trigger the display of the file upload modal */}
      <button className="add-btn" onClick={() => setShowModal(true)}>
        Add Image
      </button>

      {/* Conditionally render the modal for uploading files */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* FileForm component to handle file upload */}
            <FileForm
              onUpload={() => {
                fetchFiles();  // Refresh the file list after upload
                handleCloseModal();  // Close the modal
              }}
              onCancel={handleCloseModal}  // Close modal without uploading
            />
          </div>
        </div>
      )}

      {/* FileList component to display the list of uploaded files */}
      <FileList files={files} onRefresh={fetchFiles} />
    </div>
  );
};

export default App;