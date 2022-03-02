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
    let valid = true;
    account.account.tournamentsInvoice.filter(tournament => {
      if(tournament.order[0].name === name){
        valid = false;
      }
    })
    if(valid){
      axios.put(`${API_ACCOUNT}${account.account.id}`, {
        ...account.account,
        tournamentsInvoice: [...account.account.tournamentsInvoice, { order: [{name: name, price: price, count: 1}], total:price, date: date}],
      })
      .then(resp => {
        account.setAccount(resp.data);
        setDisplayPopUp({bool: true, message: "tournament"});
      })
      .catch(e => console.log(e))
    } else {
      setDisplayPopUp({bool: true, message: "tournament", error: true});
    }
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