import React from 'react'
import './mealItemForm.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className="form">
      <Input label="Amount" input={{
        id: 'amount' +props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}/>
      <button>ADD</button>
    </form>
  )
}

export default MealItemForm
