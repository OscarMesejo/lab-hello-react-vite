import icon1 from './../assets/icon1.png'
import icon2 from './../assets/icon2.png'
import icon3 from './../assets/icon3.png'
import icon4 from './../assets/icon4.png'


function Footer (){
    return(
        <div className = 'footer'>
            <img src={icon1} alt="icon1" />
            <img src={icon2} alt="icon2"/>
            <img src={icon3} alt="icon3" />
            <img src={icon4} alt="icon4" />

        </div>

    )
}
export default Footer;
