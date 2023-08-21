import ironHackLogo from './../assets/ironhack-logo-xs.png'
import menuTop from './../assets/menu-top-xs.png'

function Header() {
    return(
        <div className = 'header'>
        <img src={ironHackLogo} alt="ironhacklogo" />
        <img src={menuTop} alt="menutop" />
        </div>
    );
};

export default Header;