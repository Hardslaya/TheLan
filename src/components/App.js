import Tournament from './Home/Tournaments/Tournament.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Restaurant from './Restaurant/Restaurant.js';

function App() {

  return (
    <>
    <section className="section-tournaments u-margin-bottom-big">
      <Tournament />
    </section>
    <Router>

      <Link to={`/Restaurant`}>Restaurante</Link>

      <Routes>
          <Route path="/Restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
