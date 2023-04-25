import "./body.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import imgHeading from '../img/homes.jpg'
import Address from "./address"
import List from "../../pages/list/List"
const Body=()=>{
    return (
        
            <div className="heading">
                 <img className="imgheading" src={imgHeading} alt="" />
                 <div className="heading-nav">
                 <ul className="nav">
                  <li><a href="#List">ĐẶT SÂN</a></li>
                  <li><a href="">DIỄN ĐÀN</a></li>
                  <li><a href="">LỊCH SỬ GIAO DỊCH</a></li>
                  
                 </ul>
                 <div className="user_btn">
                  <FontAwesomeIcon icon={faUser}/>
                 </div>
                 <div className="cart_btn">
                  <FontAwesomeIcon icon={faCartShopping}/>
                 </div>
                  
                  <div className="address"><Address/></div>
                 </div>
                 
            </div>
        
    )
}

export default Body