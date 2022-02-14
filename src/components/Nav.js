import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="main-header">
            <h3 className="brand">Logo</h3>
            <ul className="user-nav">
                <Link to="/"><li className="user-nav__links user-nav__links--link">Home</li></Link>
                <Link to="/Restaurant"><li className="user-nav__links user-nav__links--link">Restaurante</li></Link>
                <Link to="/Shop"><li className="user-nav__links user-nav__links--link">Shop</li></Link>  
                <Link to="/LogIn"><li className="user-nav__links user-nav__links--link">Mi cuenta</li></Link>   
            </ul>
        </nav>
    );
}

export default Nav;