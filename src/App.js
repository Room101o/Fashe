import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Product } from "./pages/product/Product";
import { Contact } from "./pages/contact/Contact";
import {Footer} from "./layouts/Footer";
import { Panier } from "./pages/panier/Panier";
import { Coeur } from "./pages/coeur/Coeur";
import Scrol from "./layouts/Scrol";
export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coeur" element={<Coeur />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
      <Scrol/>
      <Footer/>
    </>
  );
};
