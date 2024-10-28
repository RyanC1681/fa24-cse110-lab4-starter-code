import { useContext } from "react";
import { Expense } from "../../types/types";
import { AppContext } from "../../context/AppContext";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here

 
 
 const context = useContext(AppContext);


  const handleDeleteExpense = (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array

    //currentExpense is checked then if its id is different from currentExpense.id. If it matches, it’s excluded.
    
    
    const updateExpenses = context.expenses.filter(
      (expense) => expense.id !== currentExpense.id
    );
    context.setExpenses(updateExpenses);
  };

   

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.name}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;