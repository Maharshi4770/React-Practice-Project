import './Header.css';
import { useContext } from 'react';
import mealsImage from '../../assets/meals.jpg'
import CartContext from '../../../Store/CartContext';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <header className="header">
        <h1>React Meals</h1>

        <button className="header-button" onClick={props.onShow}>
          <span className="icon">🛒</span>
          <span>Your Cart</span>
          <span className="badge">{cartCtx.items.length}</span>
        </button>
      </header>

      <div className="main-image">
        <img src={mealsImage} alt="Delicious food" />
      </div>
    </>
  );
};

export default Header;