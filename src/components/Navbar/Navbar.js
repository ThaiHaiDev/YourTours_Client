import { NavLink} from "react-router-dom";
import './Navbar.scss'

const Navbar = (props) => {
    return (
        <div className="navbar" >
            <NavLink to="#" className="logo">
                <div className="sidebar__logo">
                    <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="company logo" className="logo-bg"/>
                </div>
            </NavLink>
            <div className="navbar-right menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/sports-news">None</NavLink>
                <NavLink to="/product">None</NavLink>
                <NavLink to="/info-player">None</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
            <div className="navbar-right">
                <NavLink to="#" className="cart">
                    <i className="bx bx-cart-alt"></i>
                    <span className="badge">2</span>
                </NavLink>
            </div>
        </div>
    )
}
 
export default Navbar