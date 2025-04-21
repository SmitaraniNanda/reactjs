import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const EditModal = ({ file, onClose, onUpdated }) => {
    const [name, setName] = useState(file.name);
    const [newImage, setNewImage] = useState(null);

    const handleUpdate = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', newImage);

        await axios.put(`http://localhost:5000/api/files/${file.id}`, formData);
        onUpdated();
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleUpdate}>
                <h2>Edit Image</h2>
                <input value={name} onChange={e => setName(e.target.value)} required />
                <input type="file" accept="image/png,image/jpeg" onChange={e => setNewImage(e.target.files[0])} required />
                <button type="submit">Update</button>
                <button onClick={onClose} type="button">Cancel</button>
            </form>
        </div>
    );
};

export default EditModal;
