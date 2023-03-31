import React from "react";
import { Link } from "react-router-dom";

export default function InfoBox() {
  return (
    <>
      <div>
        <div className="introContainer">
          <div className="info">
            <div className="infoBox">
              <p className="greetingText">Welcome to</p>
              <p className="patanStoreText">PatanStore</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                provident incidunt iusto assumenda laboriosam eveniet qui
                doloribus praesentium dolores nobis nam voluptatem fugit
                laborum, quisquam impedit dolorum! Aut voluptatum eligendi
                incidunt doloribus nam reiciendis dolor?
              </p>
              <Link className="btnLink" to="/products">
                <button type="button" className="btn btn-primary">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="infoImage">
              <div className="emptyBox"></div>
              <img src='./images/tech.jfif' className="storeImage" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
