import Home from './Home/Tournaments/Tournament'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Restaurant from './Restaurant/Restaurant.js';

function App() {

  return (
    <>
    <Router>
      <Link to={`/`}>Home</Link>
      <Link to={`/Restaurant`}>Restaurante</Link>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
