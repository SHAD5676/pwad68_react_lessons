import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogEntry from './pages/BlogEntry';
import BlogEntry1 from './pages/BlogEntry1';






function App() {
  return (

    <div>
      {/*Navbar will added */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/new" element={<BlogEntry />} />
        <Route path="/blog/new1" element={<BlogEntry1 />} />
      </Routes>
    </div>

  );
}


export default App;
