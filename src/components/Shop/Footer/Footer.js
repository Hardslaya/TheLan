import instagram from "./../../../img/icon-instagram.png";
import facebook from "./../../../img/icon-facebook.png";
import twitter from "./../../../img/icon-twitter.png";
import github from "./../../../img/icon-github.png";
import google from "./../../../img/icon-google.png";
import whatsapp from "./../../../img/icon-whatsapp.png";


function Footer() {
  
  return (
    <>
      <footer className="footer">
        <div className="footer-icons">
          <img src={instagram}></img>
          <img src={facebook}></img>
          <img src={twitter}></img>
          <img src={github}></img>
          <img src={google}></img>
          <img src={whatsapp}></img>
        </div>
        <div className="footer-copyright">
          <p>&#169; 2022 Copyright - TheLan</p>
        </div>
      </footer>
      </>
    );
  }
  
  export default Footer;