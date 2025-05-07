import React from 'react';

const StudentList = ({ students }) => {
  if (students.length === 0) return <p>No students yet.</p>;

  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>
          <strong>{s.name}</strong> — {s.email} — {s.course}
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
