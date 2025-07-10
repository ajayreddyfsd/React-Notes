import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LoginFailed from "./components/LoginFailed";

function App() {
  return (
    <Router>
      {/* why did not i put login here as told prevly, coz then login comp would appear in every page and i dont 
      want that, earlier we have navbar here, coz we need it on every page
      likewise u can put header also, coz it needs to come on every page */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page (uses useNavigate) */}
        <Route path="/login" element={<Login />} />

        {/* Protected Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login-failed" element={<LoginFailed />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /*
  REACT ROUTER PLACEMENT RULES:
  
  1. INSIDE <Router> BUT OUTSIDE <Routes>:
     - Components that appear on EVERY PAGE
     - Examples: Navbar, Header, Footer
     - They get routing powers but don't care about URLs

  2. INSIDE <Routes> (via <Route>):
     - Components that are PAGE-SPECIFIC
     - Examples: Login, Dashboard, Profile
     - They only appear when their URL matches
*/
}

// ✅ CORRECT STRUCTURE
// <Router>
//   {/* These appear on ALL pages */}
//   <Header /> {/* Uses <Link> but doesn't need route matching */}
//   <Navbar /> {/* Same */}
//   <Routes>
//     {/* These only appear at their specific URLs */}
//     <Route path="/" element={<Home />} />
//     <Route path="/login" element={<Login />} /> {/* Only at /login */}
//     <Route path="/dashboard" element={<Dashboard />} />
//   </Routes>
//   <Footer /> {/* Also on all pages */}
// </Router>;
