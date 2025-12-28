import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
<<<<<<< HEAD
import BlogEntry from './pages/BlogEntry';
import BlogEntry1 from './pages/BlogEntry1';



=======
>>>>>>> d857be3b14a0b766a28a75a0b2eb3913b93bc9b5



function App() {
  return (

    <div>
      {/*Navbar will added */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
<<<<<<< HEAD
        <Route path="/blog/new" element={<BlogEntry />} />
        <Route path="/blog/new1" element={<BlogEntry1 />} />
=======
>>>>>>> d857be3b14a0b766a28a75a0b2eb3913b93bc9b5
      </Routes>
    </div>

  );
}


export default App;
