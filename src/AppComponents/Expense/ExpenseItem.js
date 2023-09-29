import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards";

// import Card from "C:/Users/ASUS/OneDrive/Desktop/learn react/react-app/src/AppComponents/UI/Cards.js";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  //always wrap all the element in a single div to avoid
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 250;
  // console.log(props);
  // let { date, title, amount } = props.expense;  ==>if we send the data as object the structure be props ={expense{key:value}}
  const [title, setTitle] = useState(props.title);
  let result = () => {
    // window.alert("Are you sure to change the Title");
    setTitle("Updated!!");
    console.log(title);
  };
  return (
    <Card className="exp-card">
      {/* <div className="date">{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="exp-title">
        <h2 className="description">{title}</h2>
        <div className="amount">${props.amount}</div>
      </div>
      <button className="btn" onClick={result}>
        Change Title
      </button>
    </Card>
    // <div className="expense-item">
    //   <div>March 28th 2021</div>
    //   <div className="expense-item__description">
    //     <h2>Car Insurance</h2>
    //     <div className="expense-item__price">$250</div>
    //   </div>
    // </div>
  );
}

export default ExpenseItem;
