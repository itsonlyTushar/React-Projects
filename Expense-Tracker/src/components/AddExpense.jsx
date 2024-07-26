import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExp } from '../features/tracker/tracker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function AddExpense() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDateValue] = useState(new Date());
  const dispatch = useDispatch();

  const addExpHandler = (e) => {
    e.preventDefault();
    dispatch(addExp({
      text,
      amount: parseFloat(amount),
      date: format(date, 'dd-MM-yyyy')
    }));
    setText('');
    setAmount('');
    setDateValue(new Date());
  };

  return (
    <form
      onSubmit={addExpHandler}
      className="bg-gradient-to-br from-purple-200 via-blue-100 to-teal-100 shadow-lg rounded-xl p-6 max-w-md mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Expense</h2>
      <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">Select a Date</label>
      <DatePicker
        maxDate={new Date()}
        selected={date}
        onChange={(date) => setDateValue(date)}
        dateFormat="dd-MM-yyyy"
        className="mb-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      <div className="flex flex-col space-y-4 mb-6">
        <input
          required
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          placeholder="Enter Expense"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          required
          inputMode='numeric'
          pattern='[0-9]*'
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-br from-blue-400 to-teal-500 text-white p-3 rounded-lg hover:from-blue-500 hover:to-teal-600 transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default AddExpense;
