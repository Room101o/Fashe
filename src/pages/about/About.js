import React from "react";
import aboutImg from "./../../assets/images/about.jpg";
import "./About.css";
export const About = () => {
  return (
    <>
    <div className="bg-About">
      <div className="title-about">
        <h2 className="text-center text-white ">ABOUT</h2>
      </div>
    </div>
      <div className="box-about  justify-content-center">
        <div className="img-about">
          <img src={aboutImg} alt="" />
        </div>
        <div className="text-about">
          <h4>Our Story</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur reprehenderit consequuntur accusantium voluptatum error modi maxime aliquid obcaecati dolor. Reiciendis, numquam. At, sit doloremque saepe necessitatibus impedit facilis quas.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab optio dicta voluptas nisi officia nostrum, aut delectus. Cumque blanditiis nisi aperiam! Iste, ab sed eum nostrum dolorum impedit et velit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas incidunt perspiciatis natus magni quia ducimus quas, alias dicta animi porro vitae nobis voluptatum! Maxime dolore alias expedita ut nulla?</p>
        </div>
      </div>
    </>
  );
};
