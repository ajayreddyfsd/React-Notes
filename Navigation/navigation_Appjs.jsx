// App.js (unchanged from your original)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

function App() {
  return (
    <Router>
      //! correct! but, usually we put navigation component also as one of
      //! the routes, but nested route
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
