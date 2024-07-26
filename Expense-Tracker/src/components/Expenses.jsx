import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calcTotal, deleteExpense } from '../features/tracker/tracker';

function Expenses() {
  const expenses = useSelector((state) => state.expense.expenses);
  const total = useSelector((state) => state.expense.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotal());
  }, [dispatch, total]);

  return (
    <div className="bg-gradient-to-br from-teal-200 via-blue-100 to-purple-100 shadow-lg rounded-xl p-6 max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Expenses</h2>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex justify-between items-center mb-4 p-4 bg-white shadow-md rounded-lg"
          >
            <div>
              <p className="text-gray-600 text-xs mb-1 bg-gray-200 inline-block py-1 px-2 rounded-full">{expense.date}</p>
              <p className="font-medium text-md text-gray-800">{expense.text}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-800 text-md font-semibold mr-4">₹ {expense.amount}</p>
              <button
                onClick={() => dispatch(deleteExpense(expense.id))}
                className="bg-gradient-to-br from-red-400 to-red-500 text-white p-2 rounded-md hover:from-red-500 hover:to-red-600 transition-all duration-300 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center text-sm">No expenses to show</p>
      )}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Total: ₹ {total}</h3>
      </div>
    </div>
  );
}

export default Expenses;
