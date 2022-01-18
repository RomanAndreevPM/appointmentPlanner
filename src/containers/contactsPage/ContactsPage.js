import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const {contacts, addContact} = props;
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: name,
      phone: phone,
      email: email
    };
    addContact(contact);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} 
                     phone={phone} setPhone={setPhone} 
                     email={email} setEmail={setEmail} 
                     handleSubmit={handleSubmit} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts} />
      </section>
    </div>
  );
};
