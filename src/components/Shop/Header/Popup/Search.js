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