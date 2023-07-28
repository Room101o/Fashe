import React from "react";
import "./Contact.css";
import { useState } from 'react';
export const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      fullName,
      phone,
      email,
      message,
    });
  };
  return (
    <>

      <div className="bg-Contact">
        <div className="title-contact">
          <h1 className="text-centre">CONTACT</h1>
        </div>
      </div>
      <div className="box-form container">
        <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26579.209699357732!2d-7.55632460117339!3d33.62083766111312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc65376fd149%3A0xb713dc495f5707!2sPlage%20de%20Ain%20Sebaa!5e0!3m2!1sfr!2sma!4v1690502613242!5m2!1sfr!2sma"></iframe>
        </div>
          <form onSubmit={handleSubmit} className="contact-form">
          <h3>Send us your message</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </>
  );
};
