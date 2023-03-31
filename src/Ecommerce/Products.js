import React, { useState } from "react";
import Header from "./Products/Header";
import ItemContainer from "./Products/ItemContainer";
// import { Link } from "react-router-dom"
import SideContainer from "./Products/SideContainer";

export default function Products() {
  const [value, setValue] = useState("");
  const [length, setLength] = useState("");


  let apiurl = value;

  let url = "https://fakestoreapi.com/products" + apiurl;
  // console.log(url);

  return (
    <>
      <div className="productContainer">
        <Header setValue={setValue} arraylength={length}/>
        <div className="productBody">
          <SideContainer setValue={setValue}    />
          <ItemContainer url={url} setarrayLength={setLength}  />
        </div>
      </div>
    </>
  );
}
