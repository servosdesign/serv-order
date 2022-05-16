import Header from "./components/header/header.component";
import Meals from "./components/meals/meals.component";
import Cart from './components/cart/cart.component';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
       <Meals />
      </main>
    </>
  );
}

export default App;
