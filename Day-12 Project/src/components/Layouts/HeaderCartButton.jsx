import { useContext } from 'react';
import './headerCartButton.css';
import '../Cart/CartIcon'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/CartContext';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberofCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'>
          <CartIcon />
        </span>
        <span>
          Your Cart
        </span>
        <span className='badge'>
          {numberofCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton;
