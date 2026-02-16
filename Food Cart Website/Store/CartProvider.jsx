import { useReducer } from 'react';
import CartContext from './CartContext'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }


    

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if(action.type === 'REMOVE'){
    const existingCartindex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartindex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
      updatedItems = state.items.filter(item => item.id != action.id);
    }else{
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1};
      updatedItems = [ ...state.items];
      updatedItems[existingCartindex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer( cartReducer, defaultCartState); 


    const addItemHander = (item) => {
        dispatchCartAction({ type: 'ADD', item: item})
     };

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id})
     };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHander,
        removeItem: removeItemHandler
    }

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
}

export default CartProvider
