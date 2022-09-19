import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Store from "./store/Store";
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/details' element={<ProductDetails/>}/>
        </Routes>
      </Provider>
    </>
  );
};

export default App;
