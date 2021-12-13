import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CheckoutPage from './components/CheckoutPage';
import Checkout from './components/Checkoutform/Checkout';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} exact/>
        <Route path="/checkout-page" element={<CheckoutPage/>}/> 
        <Route path="/checkout" element={<Checkout/>} exact/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
