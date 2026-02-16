import { useContext } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import CartContext from '../../../Store/CartContext';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartitemRemovehandler = (id) => {
    cartCtx.removeItem(id);
   }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  }


  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>

      <div className="cart">
        <ul className="cart-items">
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={() => cartitemRemovehandler(item.id)}
              onAdd={() => cartItemAddHandler(item)}
            />
          ))}
        </ul>

        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        <div className="actions">
          <button className="button-alt" onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className="button-alt">Order</button>}
        </div>
      </div>
    </>
  );
};

export default Cart;