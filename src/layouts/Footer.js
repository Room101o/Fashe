import { NavLink } from "react-router-dom";
import "./Footer.css";
import bancaire from "./../assets/images/bancaire.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
    return (
        <>
            <footer className="">
                <div className="box-footer d-flex justify-content-center gap-5 align-items-center">


                    <div className="box">
                        <h4 className="text-center">GET IN TOUCH</h4>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore quas alias earum doloremque!</p>
                        <div className="icon-social d-flex justify-content-center gap-1">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#000000", }} />
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000", }} />
                                <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", }} />
                                <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000", }} />
                        </div>
                    </div>
                    <div className="box links">
                        <h4>LINKS</h4>
                        <NavLink to={"/"}>Search</NavLink>
                        <NavLink to={"/about"}>About Us</NavLink>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                        <NavLink to={"/"}>Returns</NavLink>
                    </div>
                    <div className="box links">
                        <h4>LINKS</h4>
                        <NavLink to={"/"}>Search</NavLink>
                        <NavLink to={"/about"}>About Us</NavLink>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                        <NavLink to={"/"}>Returns</NavLink>
                    </div>
                </div>
                <div className=" copyright text-center">
                    <img src={bancaire} alt="" />
                    <p>Copyright &copy; All rights reserved</p>
                </div>
            </footer>
        </>
    )
}