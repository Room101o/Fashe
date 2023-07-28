import React, { useState } from "react";
import mo2 from "../../assets/images/mo2.jpg";
import mo3 from "../../assets/images/mo3.jpg";
import "./Couer.css";
export const Coeur = () => {

    let [ quantite4 , setquantite4] = useState(0)
    let [ price4 , setprice4 ] = useState(300)
    const plus4 = () => {
        setquantite4 (quantite4 +1)
        setprice4 (price4 + 300)
    }
    const mois4 = () => {
        setquantite4 (quantite4 -1)
    }

    
    let [ quantite1 , setquantite1] = useState(0)
    let [ price1 , setprice1 ] = useState(300)
    const plus1 = () => {
        setquantite1 (quantite1 +1)
        setprice1 (price1 + 300)
    }
    const mois1 = () => {
        setquantite1 (quantite1 -1)
    }


    return (
        <>
            <div className="coeur">
                <div className="title-product">
                    COUP DE COEUR
                </div>
            </div>




            <div className="container tab---1">
                <div className="tab2">
                    <h4>PRODUCTS</h4>

                </div>
                <h4>PRICE</h4>
                <h4>QUANTITE</h4>
                <div className="tab1">
                    <h4>TOTAL</h4>
                    
                    
                </div>
                <div className="add">
                  <h4>ADD</h4>
                </div>
            </div>

            <div className="container allanto">
                <div className="container tab" >

                    <div className="pics-1">
                        <img src={mo2} alt="" />
                        <p>MEN TSHIRT</p>
                        
                    </div>


                    <div className="tab10">
                        <p >300 MAD</p>
                        <h3 className="plus">

                            <div onClick={mois4}  className="mois">
                                -
                            </div>
                            <div>
                            {quantite4}
                            </div>
                            <div onClick={plus4} className="mois">
                                +
                            </div>

                        </h3>



                    </div>
                    <div className="tab11">
                        <p>{price4} MAD</p>
                        <p className="btnadd">ADD</p>
                    </div>


                </div>

            </div>
            <br />



            <div className="container allanto">
                <div className="container tab" >

                    <div className="pics-1">
                        <img src={mo3} alt="" />
                        <p>MEN TSHIRT</p>

                    </div>


                    <div className="tab10">
                        <p>300 MAD</p>
                        <h3 className="plus">
                            <div onClick={mois1} className="mois">
                                -
                            </div>
                            <div>
                            {quantite1}
                            </div>
                            <div onClick={plus1} className="mois">
                                +
                            </div>

                        </h3>



                    </div>
                    <div className="tab11">
                        <p> {price1} MAD</p>
                        <p className="btnadd">ADD</p>
                    </div>


                </div>

            </div>




        </>
    );
};