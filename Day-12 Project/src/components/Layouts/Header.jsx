import mealsImage from '../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </>
  )
}

export default Header
