import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from '../Store/CartProvider';


function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const showCarthandler = () => {
    setcartIsShown(true);
  }

  const hideCartHandler = ()=>{
    setcartIsShown(false);
  } 
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShow={showCarthandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App;