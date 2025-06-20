import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";

function Home() {
  const navigate = useNavigate();

  const courses = [
    {
      id: "web-dev",
      title: "Frontend Web Development",
      description: "Learn HTML, CSS, JavaScript, and React from scratch.",
    },
    {
      id: "data-science",
      title: "Data Science with Python",
      description: "Master data analysis, visualization, and machine learning.",
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      description: "Create stunning user interfaces and seamless user experiences.",
    },
  ];

  return (
    <>
      <div className="hero">
        <h1>Unlock Your Potential with EduLearn</h1>
        <p>Explore top-quality courses from industry experts and level up your career.</p>
        <button className="cta-button" onClick={() => navigate("/courses")}>
          Browse Courses
        </button>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Courses</h2>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>

      <div className="banner">
        <h2>Ready to Start Learning?</h2>
        <p>Sign up today and gain access to 100+ expert-led courses.</p>
        <button className="cta-button dark">Get Started</button>
      </div>
    </>
  );
}

export default Home;
