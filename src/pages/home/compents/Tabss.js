import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cards1 from "../../../assets/images/cards1.jpg";
import cards2 from "../../../assets/images/cards2.jpg";
import "./Tabs.css";

const Tabss = () => {
  return (
    <Tabs className="tabs">
      <TabList>
        <Tab>Best Seller</Tab>
        <Tab>New</Tab>
        <Tab>Sale</Tab>
        <Tab>Old</Tab>
      </TabList>

      <TabPanel>
        <div className="box-tabs">
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>New</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards2} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>New</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>New</span>
         
          </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div className="box-tabs">
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>New</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards2} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>New</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>New</span>
         
          </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div className="box-tabs">
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>Sale</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards2} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>Sale</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>Sale</span>
         
          </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div className="box-tabs">
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>Old</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards2} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>Old</span>
         
          </div>
          <div className="itemss">
            <div className="image-itemss">
              <img src={cards1} alt="" />
                 <div className="add">
              <p>Add to cart</p>
            </div>
            </div>
            <div className="info-itemss text-center">
              <h1>Product </h1>
              <p>25.99 $</p>
            </div>
            <span>Old</span>
         
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Tabss;