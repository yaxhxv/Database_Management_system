import React, { useState } from "react";

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    mobileNo: "",
    imgUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal-content">
        <form>
          <label>
            {" "}
            <p>FirstName:</p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter your First Name"
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            <p>LastName:</p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter your Last Name"
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            <p>Age:</p>
            <input
              placeholder="Enter your Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            <p>Adress:</p>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter your Address"
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            <p>MobileNo:</p>
            <input
              type="number"
              name="mobileNo"
              value={formData.mobileNo}
              placeholder="Enter your MobileNo"
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            <p>Profile Img:</p>
            <input
              type="text"
              name="imgUrl"
              value={formData.imgUrl}
              placeholder="Enter your Image Url"
              onChange={handleChange}
            />
          </label>
        </form>
        <button className="" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Modal;

{
}
