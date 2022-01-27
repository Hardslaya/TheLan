import Home from './Home/Home'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Restaurant from './Restaurant/Restaurant.js';

function App() {

  return (
    <>
    <Router>
      <Nav />

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
