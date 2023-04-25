import "./navbar.css"
import myImage from '../img/homeArt.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import Body from "../body/Body";

const Navbar = ()=>{
    return (
        <div className="navbar">
            <img className="imghome" src={myImage} alt="" />
            <div className="navContainer">
                <div className="myphone">
                  <FontAwesomeIcon icon={faPhone} />
                 <span className="hotline">Hotline: 0946795885</span>
                </div>
                <div className="body"><Body/></div>
                
            </div>
        </div>
    )
}
export default Navbar