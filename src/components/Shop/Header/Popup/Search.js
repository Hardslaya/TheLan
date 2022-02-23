import { debounce } from "./../../../../helpers/utils"
export function debounce(f, timeout = 300){
  let id = 0;
  return function (...args){
    if (id){
      clearTimeout(id);
    }
    id = setTimeout(function(){
      return f(...args);   
    }, timeout)   
  }
}

function Search(props) {

  function handleChange (event) {
    props.setSearchTerm(event.target.value);
  }

  return (
    <div className="search">
      <input id="search" type="text" onChange={handleChange} placeholder="Que quieres..." value={props.searchTerm}></input>
    </div>
  );
}
  
export default Search;