
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Nav = ({ account }) => {

    let navigate = useNavigate();

    const [ showNav, setShowNav ] = useState(false);
     
    return(
        <nav className="main-header">
            <h3 className="brand">Logo</h3>
            <span className={showNav ? "exit" : "nav-burger"} onClick={() => setShowNav(!showNav)}/>
            <ul className={showNav ? "user-nav--show" : "user-nav"}>
                <li className="user-nav__links user-nav__links--link" onClick={() => {
                    setShowNav(false)
                    navigate("/")}
                }>Home</li>
                <li className="user-nav__links user-nav__links--link" onClick={() => {
                    setShowNav(false)
                    navigate("/Restaurant")}
                }>Restaurante</li>
                <li className="user-nav__links user-nav__links--link"onClick={() => {
                    setShowNav(false)
                    navigate("/Shop")}
                }>Shop</li>
                <li className="user-nav__links user-nav__links--link" onClick={() => {
                    setShowNav(false)
                    navigate("/LogIn")}
                }>
                    {
                        account !== null ?
                            "Mi cuenta"
                        :
                            "Log in"
                    }
                </li>            
            </ul>
        </nav>
    );
}

export default Nav;