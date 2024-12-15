// BookingContext.js (or wherever your context is defined)
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [theater, setTheater] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(40000); // Default price per seat

  const updateSeats = (seats) => {
    setSelectedSeats(seats);
  };

  const updatePrice = (price) => {
    setTicketPrice(price);
  };

  // Function to update the theater
  const updateTheater = (selectedTheater) => { // Updated to 'updateTheater'
    setTheater(selectedTheater);
  };

  // Function to update the schedule
  const updateSchedule = (selectedSchedule) => {
    setSchedule(selectedSchedule);
  };

  return (
    <BookingContext.Provider value={{ theater, schedule, selectedSeats, ticketPrice, updateSeats, updatePrice, updateTheater, updateSchedule }}>
      {children}
    </BookingContext.Provider>
  );
};
