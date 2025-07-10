import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* this is our dynamic route */}
        <Route path="/user/:id" element={<Card />} />

        {/* for all the other routes */}
        <Route path="*" element={<h1>404 Not Found! 🚫</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
