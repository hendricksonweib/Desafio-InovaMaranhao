
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fest from './pages/Fest';
import Culinaria from './pages/Culinaria';
import Turismo from './pages/Turismo';
import Artesanato from './pages/Artesanato';
import Nav from './template/NAV/Nav';
import Background from './assets/AssetsBackground.svg';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './template/footer/footer';
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/culinaria" element={<Culinaria />} />
          <Route path="/festas" element={<Fest />} />
          <Route path="/artesanato" element={<Artesanato />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <img className="background" src={Background} alt="Background.svg" />
      <Footer/>
    </>
  );
}

export default App;
