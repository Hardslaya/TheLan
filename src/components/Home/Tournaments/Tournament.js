import Image from "./Image";
import Card from "./Card";
import { fetchApi, apiReducer, API_ACTIONS } from "../../../helpers/fetchApi";
import { useReducer, useEffect, useState, useContext } from "react";
import axios from "axios";
import { getDate } from "../../../helpers/getDate";
import { UserContext } from "../../../helpers/userContext";

const API_ENDPOINT = 'http://localhost:3001/tournaments';

const API_ACCOUNT = `http://localhost:3001/accounts/`;

const Tournament = ({ setDisplayPopUp }) => {

  const account = useContext(UserContext);

  const [ stateApi, dispatchApi ] = useReducer( apiReducer, { data: [], isLoading: false, isError: false } );

  useEffect(() => {
      fetchApi(API_ENDPOINT, dispatchApi, API_ACTIONS);
  },[])

  const handleClick = (name, price) => {  
    let date = getDate();
    axios.put(`${API_ACCOUNT}${account.id}`, {
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