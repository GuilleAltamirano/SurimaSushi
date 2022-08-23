import '../../styles/components/iconosNav.scss';
import instagram from "../IconosNav/img/instagram.png";
import facebook from "../IconosNav/img/facebook.png";


function IconoNav() {
    return (
            <div>
                <a href="#"><img src={instagram} alt="Logo de Instagram"/></a>
                <a href="#"><img src={facebook} alt="Logo de facebook"/></a>
            </div>
    )
};

export default IconoNav