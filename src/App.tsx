import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style.css"
import Contact from "./components/contact";
import Services from "./components/Services";
import Login from "./components/login"
import Hero_part1 from './components/Hero_part1';
import Image_hero from "./assets/image/web-design.gif"
import Registration from "./components/Registration"
import Profile from "./components/AboutMe"
import Footer from './components/Footer';
// import Navigation from "./components/header"
const Header_nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">IDTECH</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {/* Dropdown for Status */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Status
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                <li><Link className="dropdown-item" to="/Registration">Register</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



//Hero section image hero here

function Hero_side(){
  return (

<div>

<div className="container-fluid">
<Hero_part1 />
</div>

<div>
     <img src={Image_hero} alt="Website Image" className="img-fluid rounded shadow-lg" />
</div>

</div>

   
  )
}

function App() {
  return (
   <body style={{marginTop:"8%"}}>
  
   <Router>
      <Header_nav />
      <div className="container mt-5 main d-flex justify-content-center align-items-center">
      
        <Routes>
          <Route path="/" element={<Hero_side />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </div>
    </Router>
   
   
   <Footer/>
   </body>
   
  )
}

export default App
