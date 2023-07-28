import React from "react";
import card1 from "./../../assets/images/cards1.jpg";
import card2 from "./../../assets/images/cards2.jpg";
import card3 from "./../../assets/images/cards3.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Tabs from "./compents/Tabss";
export const Home = () => {
  return (
    <>
      <main className="section1 text-center">
        <div className="box-section1">
          <h1>LEATHER BAGS</h1><hr />
          <h6>New Collection</h6>
          <NavLink to={"/product"}>Shop Now</NavLink> 
        </div>    
      </main>

      <div className="coming-soon">
        <div className="container">
          <div className="card">
            <img src={card1} alt="" />
            <span>Comming soon</span>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <span>Comming soon</span>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <span>Comming soon</span>
          </div>
        </div>
      </div>
      {/* section our produits */}
      <div className="our-product">
        <div className="heading">
          <h1>Our Products</h1>
        </div>
        <div className="tabs">
          <Tabs/>
        </div>
        
      </div>

      
      <div className="section-fin">

        <div className="box-video">
          <p className="items "> THE BEAUTY </p>
          <div>
            <div className="parag">
              <h1 className="items"> LOOKBOY</h1>
            </div>
            <div className="parag">
              <p className="items"> SHOP NOW</p>

            </div>
          </div>

        </div>
      </div>
      
    </>
  );
};
