import '../../styles/components/navbar.css'
import logo from "./img/logo.png";
import IconosNav from '../IconosNav/IconosNav';
import { NavLink,Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <IconosNav/>
            <nav>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/SobreNosotros'> Conocenos </NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/Productos'>Productos</NavLink>
                <Link to='/' className='logoLink'>
                    <img src={logo} alt="" className='logo'/>
                </Link>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/Pedir'>Pedir</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/DondeEstamos'>Donde Estamos</NavLink>
            </nav>
        </>
    )
};

export default Navbar;