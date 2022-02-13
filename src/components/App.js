import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import Nav from './Nav';
import Order from './Restaurant/Sections/TakeAway/Order/Order';
import Restaurant from './Restaurant/Restaurant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Nav />

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/LogIn" element={<LogIn/>} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
