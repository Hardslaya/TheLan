import { useState } from "react";

function BtnSearch(props){

  return (
    <div className="btnsearch">
      <button onClick={() => props.setPopup(!props.popup) }>Click Que quieres ...</button>
    </div>
  );
}

export default BtnSearch;