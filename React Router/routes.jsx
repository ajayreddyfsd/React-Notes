// all routes go in App.js
// nned to install react-router-dom
// Import the "magic tools" from React Router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
c

//everything in app.js
function App() {
  return (
    // 2. Wrap everything in <Router> (like a magic box)
    <Router>
      {/* 3. <Routes> is like a list of rules for pages */}
      <Routes>
        {/* RULE 1: If URL is "/", show <Home /> */}
        <Route path="/" element={<Home />} />

        {/* RULE 2: If URL is "/about", show <About /> */}
        <Route path="/about" element={<About />} />

        {/* RULE 3: If URL doesn't match, show a 404 page */}
        <Route path="*" element={<h1>404 Not Found! 🚫</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
