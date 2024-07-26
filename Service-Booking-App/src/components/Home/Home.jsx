import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { addBooking, showHours } from '../../../features/bookings';
import { format } from 'date-fns';
import Modal from '../Modal/Modal';

function Home() {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBooking, setSelectedBooking] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const dispatch = useDispatch();
  const [open,setOpen] = useState(false)


  const handleClose = ()=>{
    setOpen(false)
  } 

  const handleOpen = () =>{
    setOpen(true)
  }


  

  const availableTime = useSelector((state) => state.bookings.filteredTimeAvailable);

  useEffect(() => {
    dispatch(showHours({ date: format(selectedDate, 'dd-MM-yyyy') }));
  }, [selectedDate, dispatch]);

  const handleBooking = (e) => {
    e.preventDefault();
    dispatch(addBooking({
      name,
      bookings: selectedBooking,
      date: format(selectedDate, 'dd-MM-yyyy'),
      time: selectedTime
    }));
    setName('');
    setSelectedBooking('');
    setSelectedDate(new Date());
    setSelectedTime('');
    handleOpen()
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
        <form onSubmit={handleBooking} className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold text-center text-white">Book Your Service</h2>
          <div>
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              required
              className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-800 text-white"
              placeholder="Enter a Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bookings" className="block text-white">Select Service</label>
            <select
              required
              name="bookings"
              value={selectedBooking}
              onChange={(e) => setSelectedBooking(e.target.value)}
              className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-800 text-white"
            >
              <option value="">Select a service</option>
              <option value="Hair Cut">Hair Cut</option>
              <option value="Shaving">Shaving</option>
              <option value="Head Massage">Head Massage</option>
              <option value="Hair Color">Hair Color</option>
              <option value="Face CleanUp">Face CleanUp</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-white">Select Date</label>
            <DatePicker

              dateFormat="dd-MM-yyyy"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-white">Select Time</label>
            <select
              required
              name="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full mb-2 p-2 border border-gray-600 rounded bg-gray-800 text-white"
            >
              <option value="">Select a time</option>
              {availableTime.map((time, index) => (
                <option key={index} value={time} disabled={!availableTime.includes(time)}>{time}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Book Now</button>
          <Modal isOpen={open} onClose={handleClose} >
            <h1 className='text-amber-800 text-xl'>Service is Succefully Booked</h1>
          </Modal>
        </form>
      </div>
    </div>
  );
}

export default Home;