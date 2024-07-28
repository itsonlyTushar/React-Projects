import { createSlice, nanoid } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
    myBookings: [{ name: null,bookings: null, date: null, time: null, }],
    timeAvailable: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
    filteredTimeAvailable : []
}

const bookingsSlice = createSlice({
    name: 'Bookings',
    initialState,
        reducers: {
        addBooking: (state, action) => {
            const { name, bookings, date,time } = action.payload;
            const booking = {
                name,
                id: nanoid(),
                bookings,
                date,
                time,
            }
            state.myBookings.push(booking);
        },
        showHours: (state, action) => {
            const { date } = action.payload;
            const bookedHours = state.myBookings.filter(booking => booking.date === date).map(booking => booking.time);
            const filteredTimeAvailable = state.timeAvailable.filter(time => !bookedHours.includes(time));
            state.filteredTimeAvailable = filteredTimeAvailable
        }
    } 
});

export const { addBooking, showHours,timeAvailable} = bookingsSlice.actions;

export default bookingsSlice.reducer;
