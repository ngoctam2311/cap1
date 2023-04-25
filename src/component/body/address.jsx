import "./address.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const Address=()=>{
   return (
      <div className="address">
           <div className="address-city">
              <select name="city" id="city-select">
              <option value="">Đà Nẵng</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
             <option value="option3">Option 3</option>

              </select>
           </div>
           
        
           <div className="address-district">
           <select name="district" id="dis-select">
              <option value="">Chọn Quận/Huyện</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
             <option value="option3">Option 3</option>

              </select>
           </div>
           
           
           <div className="address-pitch">
            <select name="pitch" id="pitch-select">
              <option value="">Chọn Loại Sân</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
             <option value="option3">Option 3</option>
              </select>
            </div>
         
            <div className="address-search">
               <input type="text" name="Nhập Tên Sân..." />
               <div className="input-icon">
               <FontAwesomeIcon icon={faSearch} />
               </div>
            </div>
            <div className="btn-search">
               <button>Tìm Kiếm</button>
            </div>
        </div>
   )
}

export default Address