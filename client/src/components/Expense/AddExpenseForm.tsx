//import {AppProvider} from "./context/AppContext";
import React, { useState,useContext } from "react";
import {AppProvider} from "../../context/AppContext";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";


const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const { expenses, setExpenses } = useContext(AppContext);

  // Exercise: Create name and cost to state variables
  const initialExpense = {
    id: "",
    description: "",
    cost: 0,
  };
  const [createEntry, setCreateEntry] = useState(initialExpense);



  //const name = useState();
  //const cost = useState();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Exercise: Add new expense to expenses context array
//
const newEntry: Expense = {
  ...createEntry,
  //id: createEntry.name + 1,
  //id: createEntry.id + 1,
  //id:"${createEntry.id+1}",
  //id: `${createEntry.name}${expenses.length + 1}`,
  id: `${createEntry.description+1}`,
};
setExpenses([...expenses, newEntry]);
};

//

    //const ExpenseItem = onSubmit;
    //onchange={({ExpenseList }) => setName(ExpenseItem)};
  //};

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            //value={""}
            // HINT: onChange={}
            
            value={createEntry.description}
            onChange={(event) =>
              setCreateEntry({ ...createEntry, description: event.target.value })
            }

          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={createEntry.cost}
            onChange={(event) =>
              setCreateEntry({ ...createEntry, cost: Number(event.target.value),})
            // HINT: onChange={}
            }
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;