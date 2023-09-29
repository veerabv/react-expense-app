// import ExpenseItem from "./AppComponents/ExpenseItem";
import Expense from "./AppComponents/Expense/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h1>First React Component</h1>
      <Expense item={expenses}></Expense>
    </div>
  );
  //  the same return
  // behind the scene  => React is the object which has createElement key as function which accepts three param
  // return React.createElement(                       //1st param =>element or component =>ele means pass as string,component is already a  function so pass the name
  //   "div",                                          //2nd param => give the attributes of the element as object
  //   {} ,                                            // 3rd param => child elements
  //   React.createElement('h1',{},"First React Component"),
  //   React.createElement(Expense,{items: expense},)
  //   );
}

export default App;
