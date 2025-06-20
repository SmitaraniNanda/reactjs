import React from "react";
import { useParams } from "react-router-dom";

const courseData = {
  "web-dev": {
    title: "Frontend Web Development",
    description:
      "In this course, you'll learn how to build modern, responsive websites using HTML, CSS, JavaScript, and React. Projects and real-world tasks included.",
  },
  "data-science": {
    title: "Data Science with Python",
    description:
      "Learn data analysis, visualization, and machine learning using Python libraries like Pandas, NumPy, and scikit-learn. Ideal for aspiring data analysts.",
  },
  "uiux-design": {
    title: "UI/UX Design",
    description:
      "This course helps you design intuitive and attractive user interfaces. You'll use tools like Figma and Adobe XD while mastering user-centered design.",
  },
};

function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="container">
        <h2>Course Not Found</h2>
        <p>Sorry, the course you’re looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetail;
