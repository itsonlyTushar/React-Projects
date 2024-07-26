import { useState } from 'react';
import './App.css';
import AddExpense from './components/AddExpense';
import Expenses from './components/Expenses';

function App() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <div className="w-full max-w-3xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-white shadow-2xl rounded-lg p-8 flex-1">
          <AddExpense />
        </div>
        <div className="bg-white shadow-2xl rounded-lg p-8 flex-1">
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default App;
