import React from "react";
import "./App.css";

const DeletePopup = ({ show, onClose, onConfirm }) => {
  if (!show) return null; // Hide modal if show is false

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this item?</p>
        <div className="button-group">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="delete" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
