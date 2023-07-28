import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navigation = () => {
    
    return (
        <>
            <div className="header d-flex align-items-center justify-content-center ">
                <h1 className="logo">Fashe<span>.</span></h1>
                <nav className="navBar d-flex gap-3 ">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/product"}>Product</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </nav>
                <div className="icon-header d-flex gap-1">
                    <NavLink to={"/coeur"} ><FontAwesomeIcon icon={faHeart}  /></NavLink>
                    <NavLink to={"/panier"}><FontAwesomeIcon icon={faShopify} beatFade  /></NavLink>
                </div>
            </div>
        </>
    )
}
