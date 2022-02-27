import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import Nav from './Nav';
import Restaurant from './Restaurant/Restaurant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from "../helpers/userContext.js";

function App() {

  const [ account, setAccount ] = useState( JSON.parse(sessionStorage.getItem("account")) || null );

  console.log(account)

  return (
    <>
    <Router>
      <Nav account={account}/>    
        <Routes>
            <Route exact path="/" element={<UserContext.Provider value={account}><Home /></UserContext.Provider>} />
            <Route path="/LogIn" element={<UserContext.Provider value={setAccount}><LogIn/></UserContext.Provider>} />
            <Route path="/Restaurant" element={<UserContext.Provider value={account}><Restaurant /></UserContext.Provider>} />
        </Routes>          
    </Router>    
    </>
  )
}

export default App;
