import React from "react";
import "./App.css"; // Importing CSS for styling

/**
 * This component renders a confirmation popup when the user attempts to delete a ticket.
 * It provides options to confirm or cancel the deletion.
 * 
 * Props:
 *  isOpen (boolean): Determines whether the popup is visible.
 *  onClose (function): Callback function to close the popup.
 *  onConfirm (function): Callback function to confirm the deletion.
 */

const DeletePopup = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // If isOpen is false, do not render the popup

  return (
    <div className="popup-overlay"> {/* Overlay for modal effect */}
      <div className="popup-box"> {/* Popup box containing content */}
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete this ticket?</p>
        
        <div className="button-group"> {/* Button group for actions */}
          <button className="cancel" onClick={onClose}>Cancel</button> {/* Close popup */}
          <button className="delete" onClick={onConfirm}>Delete</button> {/* Confirm deletion */}
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
