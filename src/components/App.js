import Home from './Home/Home'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurant from './Restaurant/Restaurant';
import Order from './Restaurant/Sections/TakeAway/Order/Order'

function App() {

  return (
    <>
    <Router>
      <Nav />

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/Order" element={<Order />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
