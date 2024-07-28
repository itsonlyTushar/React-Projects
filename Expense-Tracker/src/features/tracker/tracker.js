import { createSlice, nanoid } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initialState = {
  expenses: [],
  totalBudget : 0,
  totalAmount: 0, 
  
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExp: (state, action) => {
      const { text, amount, date } = action.payload;
      const expense = {
        id: nanoid(),
        text,
        amount,
        date: format(new Date(), 'dd-MM-yyyy')
      };
      state.expenses.push(expense);
      state.totalAmount += amount
    },
    deleteExpense: (state, action) => {
      const expense = state.expenses.find((expense) => expense.id === action.payload)
      if(expense){
        state.totalAmount -= expense.amount
        state.expenses = state.expenses.filter((expense) => expense.id !== action.payload)
      }
    },
    calcTotal: (state) => {
      state.totalAmount = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    },

    myBudget : (state,action) => {

    },
    

    setDate: (state, action) => {
      const { id, date } = action.payload;
      const expense = state.expenses.find(expense => expense.id === id);
      if (expense) {
        expense.date = format(new Date(date), 'dd-MM-yyyy');
      }
    }
  }
});

export const { addExp, deleteExpense, calcTotal, setDate } = expenseSlice.actions;
export default expenseSlice.reducer;
