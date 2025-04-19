import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="main-div">
      <div className="contact-container">
        <h1 className="heading">Contact us</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name" />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email" />

          <label htmlFor="number">Contact number</label>
          <input type="number" placeholder="Enter contact number" />

          <button type="submit" onClick={alert("Submit successfull")}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
