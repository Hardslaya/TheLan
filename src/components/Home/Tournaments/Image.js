let cardNumber = 0;

function Image() {
  cardNumber++;
    return (
      <>
        <div className={"tournament-ad__image tournament-ad__".concat(cardNumber)}></div>
      </>     
    )
  }
  
export default Image;