import React, { useState, useEffect } from "react";
import "./App.css";

const initialStudents = [
  {
    slno: 1,
    name: "stud1",
    usn: "rvce1",
    tmarks: 150,
  },
  {
    slno: 2,
    name: "stud2",
    usn: "rvce2",
    tmarks: 145,
  }
];

function StudentRow({ student }) {
  return (
    <tr>
      <td>{student.slno}</td>
      <td>{student.name}</td>
      <td>{student.usn}</td>
      <td>{student.tmarks}</td>
    </tr>
  );
}

function StudentsTable({ students }) {
  return (
    <table border="1" align="center">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Student Name</th>
          <th>USN</th>
          <th>Total Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((stud) => (
          <StudentRow key={stud.slno} student={stud} />
        ))}
      </tbody>
    </table>
  );
}

function StudentAddForm({ addStudent }) {
  const [form, setForm] = useState({
    name: "",
    usn: "",
    tmarks: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(form);

    setForm({
      name: "",
      usn: "",
      tmarks: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="usn"
        placeholder="USN"
        value={form.usn}
        onChange={handleChange}
      />

      <input
        type="text"
        name="tmarks"
        placeholder="Total Marks"
        value={form.tmarks}
        onChange={handleChange}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStudents(initialStudents);
    }, 2000);
  }, []);

  const addStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      slno: students.length + 1
    };

    setStudents([...students, studentWithId]);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>

      <StudentsTable students={students} />

      <hr />

      <StudentAddForm addStudent={addStudent} />
    </div>
  );
}

export default App;
