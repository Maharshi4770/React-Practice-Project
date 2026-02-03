import { useState } from 'react'
import UserInput from './components/userInput/UserInput'
import './App.css'
import UserList from './components/userInput/UserList'

function App() {
  const [userList, setuserList] = useState([]);

  const addUserHandler = (username, age) => {
    setuserList((prevList) => {
      return [...prevList, {name: username, age: age, id: Math.random().toString()}];
    }
    );
  }

  return (
    <>
        <UserInput  onAddUser={addUserHandler}/>
        <UserList users={userList}/>
    </>
  )
}

export default App
