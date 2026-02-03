import Card from '../UI/Card';
import './UserList.css';

const UserList = (props) => {
  return (
    <Card className="users">
    <ul>
      {props.users.map((user) => {
        return (<li key={user.id}>
            {user.name} ({user.age} Year of old)
        </li>)
      }
      )}
    </ul></Card>
    
  )
}

export default UserList;