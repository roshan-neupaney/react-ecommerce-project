import React from "react";
import { Link } from "react-router-dom";

export default function FeatureCards() {
  return (
    <>
      <div className="specialFeatureContainer">
        <div className="featureCardheader">
          <h4>OUR SPECIAL SERVICES</h4>
        </div>
        <br />
        <div className="featureCardsContainer">
          {/* <div className="row"> */}
          <div className="featureCard">
            <Link className="links" to="">
              <div className="card">
                <div className="card-body featuredimage">
                  <img src='./images/MacBook_Air_13.jfif' alt="" />
                  <div className="card-textuals">
                    <h5 className="card-title">MacBook Air 13</h5>
                    <p className="card-text">$1500.00</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="featureCard">
            <Link className="links" to="">
              <div className="card">
                <div className="card-body featuredimage">
                  <img src='./images/Rolex_watch.png' alt="" />
                  <div className="card-textuals">
                    <h5 className="card-title">Rolex watch</h5>
                    <p className="card-text">$10000.00</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="featureCard">
            <Link className="links" to="">
              <div className="card">
                <div className="card-body featuredimage">
                  <img src='./images/iPhone13.jfif' alt="" />
                  <div className="card-textuals">
                    <h5 className="card-title">iPhone13</h5>
                    <p className="card-text">$900.00</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
