import '../../styles/components/navbar.scss'
import logo from "./img/logo.png";
import IconosNav from '../IconosNav/IconosNav';
import { NavLink,Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <IconosNav></IconosNav>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <ul className='ulNavbar'>
                <li className='liNavbar'>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/"> Inicio </NavLink>
                </li>
                <li className='liNavbar'>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/SobreNosotros'> Sobre Nosotros </NavLink>
                </li>
                <li className='liNavbar'>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/Productos'>Productos</NavLink>
                </li>
                <li className='liNavbar'>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/Pedir'>Pedir</NavLink>
                </li>
                <li className='liNavbar'>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to='/DondeEstamos'>Donde Estamos</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;