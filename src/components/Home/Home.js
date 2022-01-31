import Tournament from "./Tournaments/Tournament";

import Navegation from './Header/Navegation';
import Title from './Header/Title';
import Reservation from './Header/Reservation';
import Arrows from './Header/Arrows';

const Home = () => {
    return (
        <>
        <header className="mainheader">
            <Navegation />
            <Title />
            <Reservation />
            <Arrows />
        </header>
        <div className="section-tournaments">
            <Tournament />
        </div>
        
        </>
    );
}

export default Home;