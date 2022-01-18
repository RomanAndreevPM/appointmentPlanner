import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const {appointments, addAppointment, contacts} = props;

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    addAppointment(appointment);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} setTitle={setTitle}
                         contact={contact} setContact={setContact} 
                         date={date} setDate={setDate}
                         time={time} setTime={setTime}
                         contacts={contacts} 
                         handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objects={appointments} />
      </section>
    </div>
  );
};
