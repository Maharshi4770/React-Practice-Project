import { useState } from 'react';
import Header from './components/Layouts/Header'
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import CartProvider from './Store/CartProvider';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
    
  );
}

export default App;
