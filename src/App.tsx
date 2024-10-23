import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppProvider } from "./context/AppContext";
import AddExpenseForm from "./components/Expense/AddExpenseForm";

const App = () => {
  // HINT: Wrap the MyBudgetTracker component with AppContextProvider
  return <AppProvider> <MyBudgetTracker /> </AppProvider> ;


};

export default App;
