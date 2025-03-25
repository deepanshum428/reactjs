import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="heading">Contact us</h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" />

        <label htmlFor="number">Contact number</label>
        <input type="number" placeholder="Contact number" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
