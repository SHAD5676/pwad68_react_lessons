import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';



function App() {
  return (

    <div>
      {/*Navbar will added */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>

  );
}


export default App;
