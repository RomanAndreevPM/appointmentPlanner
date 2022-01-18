import React from "react";

export const ContactPicker = (props) => {
  const {contacts, contactChange} = props;

  const handleContactChange = (e) => {
    contactChange(e.target.value);
  }

  return (
    <div>
      <select onChange={handleContactChange}>
        <option defaultValue=''>Select contact</option>
        {contacts.map(contact => {
          return (
            <option value={contact.name}>{contact.name}</option>
          )
        })}
      </select>
    </div>
  );
};
