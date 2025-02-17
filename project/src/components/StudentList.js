import React from 'react';

const StudentList = ({ students, fetchStudents, setEditingStudent }) => {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/deletestu/${id}`, { method: 'DELETE' });
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="student-list">
      <ul>
        {students.map((student) => (
          <li key={student.stdid} className="student-item">
            <span>{student.name} (Roll: {student.roll}, Course: {student.course})</span>
            <button onClick={() => setEditingStudent(student)}>Edit</button>
            <button onClick={() => handleDelete(student.stdid)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
