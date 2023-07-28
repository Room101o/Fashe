import React, { useState } from "react";
import cards1 from "../../assets/images/cards1.jpg";
import cards2 from "../../assets/images/cards2.jpg";
import cards3 from "../../assets/images/cards3.jpg";

export const Panier = () => {
    let [ quantite , setquantite] = useState(0)
    let [ price , setprice ] = useState(300)
    const plus = () => {
        setquantite (quantite +1)
        setprice (price + 300)
    }
    const mois = () => {
        setquantite (quantite -1)
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

    let [ quantite2 , setquantite2] = useState(0)
    let [ price2 , setprice2 ] = useState(300)
    const plus2 = () => {
        setquantite2 (quantite2 +1)
        setprice2 (price2 + 300)
    }
    const mois2 = () => {
        setquantite2 (quantite2 -1)
    }


    
    return (
        <>

            <div className="coeur">
                <div className="title-product">
                    PANIER
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

            </div>

            <div className="container allanto">
                <div className="container tab" >

                    <div className="pics-1">
                        <img src={cards1} alt="" />
                        <p>MEN TSHIRT</p>

                    </div>


                    <div className="tab10">
                        <p>300 MAD</p>
                        <h3 className="plus">
                            <div onClick={mois}   className="mois">
                                -
                            </div>
                            <div>
                                {quantite}
                            </div>
                            <div onClick={plus} className="mois">
                                +
                            </div>

                        </h3>



                    </div>
                    <div className="tab11">
                        <p>{price} MAD </p>
                    </div>


                </div>






            </div>
            <div className="container allanto">
                <div className="container tab" >

                    <div className="pics-1">
                        <img src={cards3} alt="" />
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
                    </div>


                </div>

            </div>



            <div className="container allanto">
                <div className="container tab" >

                    <div className="pics-1">
                        <img src={cards2} alt="" />
                        <p>MEN TSHIRT</p>

                    </div>


                    <div className="tab10">
                        <p>300 MAD</p>
                        <h3 className="plus">
                            <div onClick={mois2}  className="mois">
                                -
                            </div>
                            <div>
                            {quantite2}
                            </div>
                            <div onClick={plus2} className="mois">
                                +
                            </div>

                        </h3>



                    </div>
                    <div className="tab11">
                        <p> {price2} MAD</p>
                    </div>


                </div>

            </div>

            <div className="container allanto">
                <div className="container tab" >

                    <div className="pics-1">
                        <img src="" alt="" />
                        <p></p>

                    </div>

                    <p></p>
                    <div className="tab10">
                        <h3 >
                            <div >

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>

                        </h3>



                    </div>
                    <div className="tab111">

                        <div>
                            <button className="btn--1">procced to paiment</button>

                        </div>


                    </div>


                </div>

            </div>



        </>
    );
};