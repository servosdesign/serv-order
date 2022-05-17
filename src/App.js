import { useState } from 'react';

import Header from './components/header/header.component';
import Meals from './components/meals/meals.component';
import Cart from './components/cart/cart.component';
import CartProvider from './store/cart-provider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
       <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
