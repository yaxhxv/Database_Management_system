import React, { useState } from "react";

const EmployeeList = ({ employees, setActiveProfile }) => {
  const Button = () => {
    return <button>❌</button>;
  };

  const handleClick = (id) => {
    setActiveProfile(id);
    console.log(id);
  };
  return (
    <div>
      {employees ? (
        <div>
          {employees.map((item, index) => (
            <div className="employeeListName" key={item.id}>
              {" "}
              <div className="name" onClick={() => handleClick(item.id)}>
                {" "}
                <h3 key={index}>
                  {item.firstName}
                  {item.lastName}
                </h3>
              </div>
              <Button />
            </div>
          ))}
        </div>
      ) : (
        <div>dfvdv</div>
      )}
    </div>
  );
};

export default EmployeeList;
