import './mealItemForm.css';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const [amoutnIsValid, setAmoutnIsValid] = useState(true)
  const amountRef = useRef();

const submitHandler = (e)=>{
  e.preventDefault();

  //Here this value is string even if it is number so we have to cnvert it into number by add + sign
  const enteredAmount = amountRef.current.value;
  const enteredAmountNumber = +enteredAmount;

  if(enteredAmount.trim().length === 0 || enteredAmountNumber.length < 1 || enteredAmountNumber.length > 5){
    setAmoutnIsValid(false);
    return;
  }

  props.onAddToCart(enteredAmountNumber);
}

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input
        ref= {amountRef }
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>

      <button>+ Add</button>
      {!amoutnIsValid && <p>Please enter a valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;