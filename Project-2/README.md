# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<----------------------------------------------------------------------------->




import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import './userInput.css';
import ErrorModel from '../UI/ErrorModel';


const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, seterror] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ){
      seterror({
        title: 'Invaid Input',
        message: 'Please enter a valid Input'
      });
      return;
    }
    if(+enteredAge < 1){
      seterror({
        title: 'Invaid age',
        message: 'PLease enter a valid age (>0).'
      })
      return;
    }
    props.onAddUser(enteredName, enteredAge);
  };
  
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
        ref={nameInputRef}/>
        <label htmlFor="age" >Age (Years)</label>
        <input 
        id="age" 
        type="number" 
        ref={ageInputRef}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card></>
  );
};

export default UserInput;