import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

export default function ItemContainer(props) {
  const [data, setData] = useState([]);
  // const [rangeValue, setRangeValue] = useState()

  // let valueOfRange = props.rangevalue;
  
  
  useEffect(() => {
    axios
    .get(props.url)
    .then((response) => {
      setData(response.data)
  // console.log(data.price)

    })
    .catch((error) => {
      console.log(error);
    });
  },[props.url]);


  

  // data.map((element) => {console.log(element.price)}
  
  props.setarrayLength(data.length)
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((element) => {
            return (
              <div className="col-md-4 " key={element.id}>
                <ItemCard
                  title={element.title}
                  price={element.price}
                  image={element.image}
                  

                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
