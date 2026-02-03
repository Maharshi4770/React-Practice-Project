import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import './userInput.css';
import ErrorModel from '../UI/ErrorModel';


const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [username, setUsername] = useState('');
  const [Age, setAge] = useState('');
  const [error, seterror] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(username.trim().length === 0 || Age.trim().length === 0 ){
      seterror({
        title: 'Invaid Input',
        message: 'Please enter a valid Input'
      });
      return;
    }
    if(+Age < 1){
      seterror({
        title: 'Invaid age',
        message: 'PLease enter a valid age (>0).'
      })
      return;
    }
    props.onAddUser(username, Age);
    setUsername('');
    setAge('');
    
  };

  const usernameChangeHandler = (e)=>{
    setUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
    
  }
  
  const errorhandler = ()=>{
    seterror(null);
  }

  return (
    <>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorhandler}/>}
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input 
        id="username" 
        type="text" 
        value={username} 
        onChange={usernameChangeHandler}
        ref={nameInputRef}/>
        <label htmlFor="age" >Age (Years)</label>
        <input 
        id="age" 
        type="number" 
        value={Age} 
        onChange={ageChangeHandler}
        ref={ageInputRef}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card></>
  );
};

export default UserInput;