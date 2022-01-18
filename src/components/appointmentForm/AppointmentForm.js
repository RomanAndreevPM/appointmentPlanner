import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const {
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
  } = props;

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  };

  const contactChange = (contact) => {
    setContact(contact);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={title} onChange={handleTitleChange} placeholder="Add title"/>
        <input type='date' value={date} onChange={handleDateChange} min={getTodayString} />
        <input type='time' value={time} onChange={handleTimeChange} min={getTodayString} />
        <ContactPicker value={contact} contacts={contacts} contactChange={contactChange} />
        <input type='submit' value="Add appointment" />
      </form>
    </div>
  );
};
