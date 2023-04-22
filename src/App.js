import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Ecommerce/Navbar";
import About from "./Ecommerce/About";
import Home from "./Ecommerce/Home";
import Products from "./Ecommerce/Products";
import Contact from "./Ecommerce/Contact";
import Signin from "./Ecommerce/Signin";
import SingleProductpage from "./Ecommerce/Products/SingleProductpage";
// import Mypage from "./Ecommerce/Products/Mypage";

export default function App(props) {
  return (
    <>
      <BrowserRouter>
        <Navbar title="PatanStore" />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          {/* <Route exact path="/singleProduct" element={<Mypage/>}></Route> */}
          <Route exact path="/singleProduct" element={<SingleProductpage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
