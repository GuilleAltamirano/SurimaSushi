import '../../styles/components/navbar.css'
import logo from "./img/logo.png";
import IconosNav from '../IconosNav/IconosNav';
import { NavLink,Link } from "react-router-dom";


export function Navbar() {
    return (
        <>
            <nav>
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