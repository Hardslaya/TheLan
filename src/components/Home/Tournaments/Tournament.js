import Image from "./Image";
import Card from "./Card";

const games = ["League of legends", "Fortnite", "Apex Legends", "Hearthstone"];

function Tournament(){
  
  return (
    <>
      {games.map(function(game){
          return (
            <div className="tournament-ad" key={game}>
              <Image />
              <Card />
            </div>
          )
      })}
    </>
  )
}
  
export default Tournament;