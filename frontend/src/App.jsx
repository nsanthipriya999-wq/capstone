import react from 'react';
import Nav from "./components/Nav.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Promotions from "./pages/Promotions.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Notfound from './pages/Notfound.jsx';
import Footer from './components/Footer.jsx'
import { Routes, Route } from "react-router";
import "./App.css"

export default function App(){
  return(
    <div className='app-container'>
      <Nav />
     <div className='main-container'>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/promotions" element={<Promotions />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<Notfound />}/>
      </Routes>
      </div>
     <Footer />
  </div>





  )
}
