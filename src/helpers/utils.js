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


export function sortBy(list, key){
  return list.slice().sort((item1, item2) => {
    if (typeof(item1[key]) === "number"){
      return item2[key] - item1[key]
    }
    if (item1[key].toLowerCase() < item2[key].toLowerCase()){
      return -1;
    }else if (item1[key].toLowerCase() > item2[key].toLowerCase()){
      return +1;
    }else{
      return 0;
    }
  })
}