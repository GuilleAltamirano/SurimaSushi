import '../../styles/components/navbar.scss'

function Navbar() {
    return (
        <nav>
            <img src="/surima/assents/img/logo.png" alt="Logo" />
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
                    <a href="#"> Donde encontrarnos </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;