import React from "react";

export const ContactForm = (props) => {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
  } = props;

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleNameChange} placeholder="Add name"/>
        <input type='phone' value={phone} onChange={handlePhoneChange} placeholder="Add phone"/>
        <input type='email' value={email} onChange={handleEmailChange} placeholder="Add email"/>
        <input type='submit' value="Add contact"/>
      </form>
    </div>
  );
};
