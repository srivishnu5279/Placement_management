import React, { useState, useEffect } from 'react';

const StudentForm = ({ fetchStudents, editingStudent, setEditingStudent }) => {
  const [stdid, setStdid] = useState('');
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [qualification, setQualification] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [hallticketno, setHallticketno] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setStdid(editingStudent.stdid);
      setName(editingStudent.name);
      setRoll(editingStudent.roll);
      setQualification(editingStudent.qualification);
      setCourse(editingStudent.course);
      setYear(editingStudent.year);
      setHallticketno(editingStudent.hallticketno);
    }
  }, [editingStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { stdid, name, roll, qualification, course, year, hallticketno };

    if (editingStudent) {
      // Update student
      await fetch('http://localhost:8080/updatestu', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
    } else {
      // Add new student
      await fetch('http://localhost:8080/addstu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student),
      });
    }

    fetchStudents();
    setEditingStudent(null);
    setStdid('');
    setName('');
    setRoll('');
    setQualification('');
    setCourse('');
    setYear('');
    setHallticketno('');
  };

  return (
    <div className="form-container">
      <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={stdid}
          onChange={(e) => setStdid(e.target.value)}
          placeholder="Student ID"
          required
          disabled={editingStudent}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          placeholder="Roll Number"
          required
        />
        <input
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          placeholder="Qualification"
          required
        />
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
          required
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          required
        />
        <input
          type="number"
          value={hallticketno}
          onChange={(e) => setHallticketno(e.target.value)}
          placeholder="Hall Ticket Number"
          required
        />
        <button type="submit">{editingStudent ? 'Update Student' : 'Add Student'}</button>
      </form>
    </div>
  );
};

export default StudentForm;
