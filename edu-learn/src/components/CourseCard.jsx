import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ title, description, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="course-button" onClick={handleClick}>
        View Details
      </button>
    </div>
  );
}

export default CourseCard;
