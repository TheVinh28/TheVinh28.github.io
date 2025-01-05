import React from "react";

function EmployeeList({ employees }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Employee List</h2>
      {employees.length > 0 ? (
        <ul className="space-y-2">
          {employees.map((employee, index) => (
            <li key={index} className="border p-2 rounded">
              <p>
                <strong>Name:</strong> {employee.name}
              </p>
              <p>
                <strong>Position:</strong> {employee.position}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees added yet.</p>
      )}
    </div>
  );
}

export default EmployeeList;
