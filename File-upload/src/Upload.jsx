import axios from "axios";
import { useState } from "react";
import "./App.css";

export default function Upload({ onLogout }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Upload Success! File path: " + res.data.path);
    } catch (err) {
      alert("Upload failed.");
    }
  };

  return (
    <div className="container">
      <h2>Upload File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
