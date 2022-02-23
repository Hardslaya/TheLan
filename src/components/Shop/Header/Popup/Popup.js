import {useState} from 'react';

import Search from "./Search";
import List from "./List";

function Popup(props) {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="popup">
      <div className='popup-close'>
        <button onClick={() => props.setPopup(!props.popup)}>x</button>
      </div>
      
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <List searchTerm={searchTerm} addCart={props.addCart}/>
    </div>
  );
}
  
export default Popup;