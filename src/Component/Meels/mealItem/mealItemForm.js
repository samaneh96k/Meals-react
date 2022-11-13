import React, { useRef,useState } from "react";
import Input from "../../Ui/input";
import classes from "./mealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return
    }

    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+ Add</button>
      {!amountValid&& <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;