import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Cards";
// import Card from "C:/Users/ASUS/OneDrive/Desktop/learn react/react-app/src/AppComponents/UI/Cards.js";
import "./Expense.css";
function Expense(props) {
  // console.log(props);
  return (
    <Card className="expenses">
      <ExpenseItem
        // expense={expenses[0]} =>passing as the object to the component
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
