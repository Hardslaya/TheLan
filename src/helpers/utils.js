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