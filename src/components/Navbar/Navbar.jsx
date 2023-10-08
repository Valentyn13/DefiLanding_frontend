import "./Navbar.css";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setHamburgerActive} from "../../redux/reduxSlices/navbarSlice/navbarSlice";
import { closeHamburgerActive } from "../../redux/reduxSlices/navbarSlice/navbarSlice";
const Navbar = () => {
const dispatch = useDispatch()
const hamburgerState = useSelector((state) => state.navbar.hamburgerActive)   

 const goToLink = (e) => {
    if(e.target.id === 'home') {
    dispatch (closeHamburgerActive(false))
    return
    }
    dispatch(setHamburgerActive(!hamburgerState))
 }

    return (
    <>
        <div className="navbar">
            <div className="container">
                <h1 >
                    <Link id="home" className="logo-btn-hover" onClick={goToLink} to='/'>Defi</Link>
                </h1>
                <ul className={hamburgerState? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <Link className="link-hover-line" onClick={goToLink} to="platform">Platform</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-hover-line" onClick={goToLink} to="dev">Developers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-hover-line" onClick={goToLink} to="comm">Community</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-hover-line" onClick={goToLink} to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={goToLink} className="btn blue-btn-hover" to="use">Use Defi</Link>
                    </li>
                </ul>
                <div onClick={()=>dispatch(setHamburgerActive(!hamburgerState))} className="hamburger">
                    {hamburgerState ? (<AiOutlineClose className="icon" />) : (<AiOutlineMenu className="icon" />)}
                </div>

            </div>
        </div>

    </>

    )
}

export default Navbar;