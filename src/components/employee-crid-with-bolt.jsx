import React, { useState } from 'react';

interface Entry {
  id: string;
  name: string;
  designation: string;
}

function EmployeeCRUDBolt() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: '101', name: 'Name 1', designation: 'Designation' },
    { id: '102', name: 'Name 2', designation: 'Designation' },
    { id: '103', name: 'Name 3', designation: 'Designation' },
    { id: '104', name: 'Name 4', designation: 'Designation' },
    { id: '105', name: 'Name 5', designation: 'Designation' },
  ]);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    designation: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.designation) return;
    
    setEntries(prev => [...prev, formData]);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      id: '',
      name: '',
      designation: '',
    });
  };

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="row g-4">
          {/* Form Section */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                      ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      value={formData.id}
                      onChange={handleInputChange}
                      placeholder="Enter ID"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="designation" className="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="Enter Designation"
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary flex-grow-1"
                    >
                      ADD
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-secondary flex-grow-1"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover mb-0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry) => (
                        <tr key={entry.id}>
                          <td>{entry.id}</td>
                          <td>{entry.name}</td>
                          <td>{entry.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCRUDBolt;