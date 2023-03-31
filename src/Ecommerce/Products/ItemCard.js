import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard(props) {
  // const rendering=()=>{
  //   if(props.rangeValue>=props.price){
  //     return true;
  //   }
  //   else return false;
  // }
  // console.log(props.price)

  return (
    <>
      <Link target="_blank" className="productLinks links" to="/singleProduct">
        <div className="card product-card my-3">
          <div className="card-body">
            <img src={props.image} alt="" />
            <div className="card-textuals">
              <h6 className="card-title">{props.title}</h6>
              <p className="card-text">{"Rs." + props.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
