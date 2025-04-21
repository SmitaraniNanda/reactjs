import React, { useState } from 'react';
import axios from 'axios';
import EditModal from './EditModal';
import '../App.css';

const FileList = ({ files, onRefresh }) => {
    const [editFile, setEditFile] = useState(null);

    const handleDelete = async id => {
        const confirmDelete = window.confirm(' Are you sure you want to delete this image?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/api/files/${id}`);
            alert(' File deleted successfully.');
            onRefresh();
        } catch (error) {
            console.error('Delete error:', error);
            alert(' Error deleting the file. Please try again.');
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
                    {files.map(file => (
                        <tr key={file.id}>
                            <td>
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
                                <button onClick={() => setEditFile(file)}>Edit</button>
                                <button onClick={() => handleDelete(file.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editFile && (
                <EditModal
                    file={editFile}
                    onClose={() => setEditFile(null)}
                    onUpdated={onRefresh}
                />
            )}
        </div>
    );
};

export default FileList;
