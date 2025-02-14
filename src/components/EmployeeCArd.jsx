import React from "react";

const EmployeeCard = ({ employees, activeProfile }) => {
  const selectedEmployee = employees.find((emp) => emp.id === activeProfile);

  return (
    <div>
      {selectedEmployee ? (
        <div>
          <div className="image">
            <img src={selectedEmployee.image} alt="" />
          </div>
          <div className="name">
            {selectedEmployee.firstName} {selectedEmployee.lastName}
          </div>
          <div className="age">{selectedEmployee.age}</div>
          <div className="mobileNo">Mobile No: {selectedEmployee.mobileNo}</div>
          <div className="dob">DOB :{selectedEmployee.dob}</div>
        </div>
      ) : (
        <div>
          <h1>Employee not Selected</h1>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
