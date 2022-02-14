import Image from "./Image";
import Card from "./Card";
import { fetchApi, apiReducer, API_ACTIONS } from "../../../helpers/fetchApi";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { getDate } from "../../../helpers/getDate";

const user = sessionStorage.getItem("user");

const API_ENDPOINT = 'http://localhost:3001/tournaments';

const API_ACCOUNT = `http://localhost:3001/accounts/${user}`;

const Tournament = ({ setDisplayPopUp }) => {

  const [ stateApi, dispatchApi ] = useReducer( apiReducer, { data: [], isLoading: false, isError: false } );

  const [ account, setAccount] = useState([]);

  useEffect(() => {
      if(user !== null){ 
        axios.get(API_ACCOUNT)
        .then(resp => setAccount(resp.data))
        .catch(e => console.log(e))
      } 
      fetchApi(API_ENDPOINT, dispatchApi, API_ACTIONS);
  },[])

  const handleClick = (name, price) => {  
    let date = getDate();
    axios.put(API_ACCOUNT, {
      ...account,
      tournamentsInvoice: [...account.tournamentsInvoice, { order: [{name: name, price: price, count: 1}], total:price, date: date}],
    })
    .then(resp => setDisplayPopUp({bool: true, message: "tournament"}))
    .catch(e => console.log(e))
  }
  
  return (
    <>
      {
        stateApi.data.map(function(game, index){
            return (
              <div className="tournament-ad" key={game.name}>
                <Image tournamentNumber={index + 1}/>
                <Card game={game} handleClick={handleClick}/>
              </div> 
            )
        })
      }
    </>
  )
}
  
export default Tournament;