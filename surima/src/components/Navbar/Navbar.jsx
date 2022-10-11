import '../../styles/components/navbar.css'
import logo from "./img/logo.png";
import IconosNav from '../IconosNav/IconosNav';
import { NavLink,Link } from "react-router-dom";
import { useState } from 'react';


export function Navbar() {
    const [state, setState] = useState(false);
    
    const detectScroll = () => {
        return window.addEventListener("scroll", conditionScroll);
    }
    const removeScroll = () => {
        return window.removeEventListener("scroll");
    }

    const conditionScroll = () => {
        if (window.scrollY > 10){
            setState(true);
        }else {
            setState(false);
        }
    }
    detectScroll()

    return (
        <>
            <nav className={state ? "navbarActived" : "navbarInactive"}>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/conocenos'> Conocenos </NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/productos'>Productos</NavLink>
                <Link to='/' className='logoLink'>
                    <img src={logo} alt="" className='logo'/>
                </Link>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/pedir'>Pedir</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/contacto'>Contacto</NavLink>
            </nav>
        </>
    )
};