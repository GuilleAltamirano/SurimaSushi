import '../../styles/components/navbar.scss'
import logo from './img/logo.png'
import IconosNav from '../IconosNav/IconosNav';


function Navbar() {
    return (
        <nav>
            <IconosNav></IconosNav>
            <img src={logo} alt="Logo" />
            <ul>
                <li>
                    <a href="#"> Inicio </a>
                </li>
                <li>
                    <a href="#"> Conocenos </a>
                </li>
                <li>
                    <a href="#"> Carta </a>
                </li>
                <li>
                    <a href="#"> Pedir </a>
                </li>
                <li>
                    <a href="#"> Donde estamos </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;