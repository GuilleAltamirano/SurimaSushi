import '../../styles/components/navbar.scss'
import logo from "./img/logo.png";
import IconosNav from '../IconosNav/IconosNav';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <IconosNav></IconosNav>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <ul className='ulNavbar'>
                <li className='liNavbar'>
                    <Link to="/"> Inicio </Link>
                </li>
                <li className='liNavbar'>
                    <Link to='/SobreNosotros'> Sobre Nosotros </Link>
                </li>
                <li className='liNavbar'>
                    <Link to='/Productos'>Productos</Link>
                </li>
                <li className='liNavbar'>
                    <Link to='/Pedir'>Pedir</Link>
                </li>
                <li className='liNavbar'>
                    <Link to='/DondeEstamos'>Donde Estamos</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;