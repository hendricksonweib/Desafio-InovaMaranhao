import Home from "./pages/Home";
import Fest from "./pages/Fest";
import Background from "./assets/AssetsBackground.svg";
import Nav from "./template/NAV/Nav";
import "./index.css";

function App() {

  return (
    <>
      <Nav/>
      <img className="background" src={Background} alt="Background.svg" />
      <div className="content">
        <Fest/>
      </div> 
    </>
  )
}

export default App
