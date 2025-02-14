import React, { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="box">
      <div className="headerNav">
        <h1>Employee Database Management</h1>

        <div className="buttonNav">
          <button onClick={handleClick}>Add Employee</button>
          {isModalOpen && <Modal onClose={handleClose} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
