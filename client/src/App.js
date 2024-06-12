import { useEffect } from 'react';
import './App.css';
import Home from "./screen/Home"
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Frequent from './components/Frequent';
import NavBar from './components/NavBar';
import Layout from './components/layout';
import { Route, Routes, useLocation } from "react-router-dom";
import Privacy from './components/Privacy';
import Products from './components/Products';
import Terms from './components/Terms';


function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/frequent" element={<Frequent />} />
          </Route>
        </Routes>

      </ScrollToTop>
      <Footer/>
    </div>
  );
  }


const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return children;
};

export default App;


