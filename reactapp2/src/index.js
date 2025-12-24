import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './Components2/Nav';
import Car from './pages/Car';
import Form from './pages/Form';


function App() {
  
  //let carinfo = {brand:"Odi", year:2023, color:"Blue"};

  return (
    <BrowserRouter>
      {/* Navigation */}
      <Nav />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/cars" element={<Car brand="Odi" year="2023" color="Red" />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

