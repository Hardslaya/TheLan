import Image from "./Image";
import Card from "./Card";

const games = ["League of legends", "Fortnite", "Apex Legends", "Hearthstone"];

function Tournament(){
  
  return (
    <>
      {games.map(function(index){
          return (
            <div className="tournament-ad" key={index}>
              <Image />
              <Card />
            </div>
          )
      })}
    </>
  )
}
  
export default Tournament;