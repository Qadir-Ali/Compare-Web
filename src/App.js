import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Landingpage from './pages/landingpage';
import Aboutus from './pages/aboutus';

// Css
import './Css/Navbar.css'
import './Css/Component.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} /> 
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
