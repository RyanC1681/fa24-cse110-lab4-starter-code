import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

import { fetchBudget, updateBudget } from "../../utils/budget-utils";


const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [modBudget, setModBudget] = useState(budget);
  const [modeEditing, setModeEditing] = useState(false);
    
  
  useEffect(() => {
    getBudget();
  }, []);

  const getBudget = async () => {
    try {
      const fetchedBudget = await fetchBudget();
      setBudget(fetchedBudget);
      setModBudget(fetchedBudget);
    } catch (error) {
      console.error("Could not retrieve budget", error);
    }
    
  };

  const handleBudgetUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedBudget = await updateBudget(modBudget);
      setBudget(updatedBudget);
      setModeEditing(false);
    } catch (error) {
      console.error("Could not update budget", error);
    }
  };

  return (
    <div
      className="alert alert-secondary p-3 d-flex align-items-center justify-content-between"
      data-testid="budget"
    >
      {modeEditing ? (
        <form onSubmit={handleBudgetUpdate} className="d-flex align-items-center">
          <input
            type="number"
            value={modBudget}
            onChange={(e) => setModBudget(parseInt(e.target.value))}
            className="form-control mr-2" 
          />
          <button type="submit" className="btn btn-primary" >
            Save
          </button>
        </form>
      ) : (
        <>
          <div>Budget: ${budget}</div>
          <button className="btn btn-primary" onClick={() => setModeEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>

    
  );

  
};



//const Budget = () => {

  //const {budget}  = useContext(AppContext);
  //return (
   // <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      
      
      //<div>Budget: ${budget}</div>

    //</div>
 //);
//};

export default Budget;
// <div>Budget: $1000</div>
