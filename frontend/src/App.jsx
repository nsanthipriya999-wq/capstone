
//--------------------------------App.jsx --------------------------------------------------------
import react from 'react';
import Nav from "./components/Nav.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Promotions from "./pages/Promotions.jsx"
import SignUp from "./pages/SignUp.jsx"
import Contact from "./pages/Contact.jsx"
import Notfound from './pages/Notfound.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import { Routes, Route } from "react-router";
import AdminDashboard from './pages/AdminDashboard.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import "./App.css"
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App(){
  return(
    <div className='app-container'>
      <Nav />
     <div className='main-container'>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/promotions" element={<Promotions />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/user-dashboard" element={<UserDashboard />}/>
        <Route path="/*" element={<Notfound />}/>

      </Routes>
      </div>
     <Footer />
  </div>





  )
}
