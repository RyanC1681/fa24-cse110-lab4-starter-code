import { createContext, useState } from "react";
import { Expense } from "../types/types";
import Budget from "../components/Budget/Budget";

// Exercise: Create add budget to the context

interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);

  return (
    <AppContext.Provider
      value={{
        expenses: expenses,
        setExpenses: setExpenses,
        //budget:setbudget,
        //budget:Budget,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
