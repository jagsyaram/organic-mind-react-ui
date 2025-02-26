import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeTable = () => {
  // State for form inputs and editing mode
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [editingId, setEditingId] = useState(null); // Track which employee is being edited

  // State for table data
  const [employees, setEmployees] = useState([
    { id: 101, name: "Name 1", designation: "Designation 1" },
    { id: 102, name: "Name 2", designation: "Designation 2" },
    { id: 103, name: "Name 3", designation: "Designation 3" },
    { id: 104, name: "Name 4", designation: "Designation 4" },
    { id: 105, name: "Name 5", designation: "Designation 5" },
  ]);

  // Handle form submission (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && name && designation) {
      if (editingId) {
        // Update existing employee
        setEmployees(
          employees.map((employee) =>
            employee.id === editingId
              ? { id: parseInt(id), name, designation }
              : employee
          )
        );
        setEditingId(null); // Exit editing mode
      } else {
        // Add new employee
        setEmployees([...employees, { id: parseInt(id), name, designation }]);
      }
      // Reset form
      setId("");
      setName("");
      setDesignation("");
    }
  };

  // Handle Edit button click
  const handleEdit = (employee) => {
    setId(employee.id);
    setName(employee.name);
    setDesignation(employee.designation);
    setEditingId(employee.id);
  };

  // Handle Delete button click
  const handleDelete = (idToDelete) => {
    setEmployees(employees.filter((employee) => employee.id !== idToDelete));
    if (editingId === idToDelete) {
      setEditingId(null); // Clear editing mode if deleting the edited employee
      setId("");
      setName("");
      setDesignation("");
    }
  };

  // Handle form reset
  const handleReset = () => {
    setId("");
    setName("");
    setDesignation("");
    setEditingId(null); // Clear editing mode on reset
  };

  return (
    <div className="w-100 p-3">
      <div className="row g-0">
        <div className="col-12 col-md-4">
          <div className="card p-3 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label text-start">
                  ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter ID"
                  required
                  disabled={editingId !== null} // Disable ID field when editing
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-start">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="designation" className="form-label text-start">
                  Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="Enter Designation"
                  required
                />
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  {editingId ? "Update" : "ADD"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="card p-3">
            <table className="table table-bordered w-100">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleEdit(employee)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
