import mealsImage from '../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className='header'>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </>
  )
}

export default Header
