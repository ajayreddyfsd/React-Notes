//   COMPLETE REACT ROUTER GUIDE FOR BEGINNERS
//   ========================================

//   1. ROUTER WRAPPER (MANDATORY)
//   -----------------------------
//   - The <BrowserRouter> (aliased as Router) creates the routing context
//   - ANY component that uses these MUST be wrapped inside <Router> tag
//          (only if u want to put those comps in app.js as tags or else not required):
//     * <Link to="/path">   (Navigation links)
//     * useNavigate()       (Programmatic navigation)
//     * useParams()         (URL parameters)
//     * useLocation()       (Current route info)
//   - This includes ALL navigation menus (like Navbar)

//   Example:
//   function App() {
//     return (
//       <Router>  {/* ← Essential wrapper */}
//       <Navbar /> {/* Contains <Link> so MUST be inside */}
//       <Routes>...</Routes>
//     </Router>
//   );
// }

// 2. ROUTES DEFINITION
// --------------------
// - ALL application paths must be defined in <Routes>
// - Structure: <Route path="url" element={<Component/>}>
// - Each <Link to> must have EXACTLY matching <Route path>
// - Route order matters! More specific paths should come first

// Example:
// <Routes>
//   <Route path="/user/:id" element={<Profile/>} />  /* Dynamic route */
//   <Route path="/about" element={<About/>} />
//   <Route path="/" element={<Home/>} />             /* Default route */
//   <Route path="*" element={<NotFound/>} />         /* 404 catch-all */
// </Routes>

// 3. COMPONENT TYPES
// -----------------
// A) ROUTING-DEPENDENT COMPONENTS:
//    - Use routing features (listed in section 1)
//    - MUST be inside <Router>
//    - Examples: Navbars, Page layouts, Protected routes

// B) NORMAL COMPONENTS:
//    - Don't use routing features
//    - Can be used anywhere
//    - Examples: Buttons, Cards, static Footers

// 4. COMMON PITFALLS
// -----------------
// - Blank pages? Check:
//   * Is <Router> wrapping everything?
//   * Are all <Link> destinations defined in <Routes>?

// */}

//   REACT ROUTER GOLDEN RULES:

//   1. The <Router> is like a "power strip" - it gives routing ability to everything plugged into it
//   2. There are TWO ways to plug components in:

//   METHOD 1: Automatic (Recommended for pages)
//   ----------------------------------------
//   <Router>
//     <Routes>
//       <Route path="/login" element={<Login />} /> {/* Login gets power automatically */}
//       </Routes>
//       </Router>

//       METHOD 2: Manual (Only needed for persistent components)
//       ----------------------------------------
//       <Router>
//         {/* These need manual wrapping because they appear on ALL pages */}
//         <Header /> {/* If Header uses <Link> */}
//         <Navbar />  {/* If Navbar uses <Link> */}

//         <Routes>
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>

//       🚫 NEVER DO THIS:
//       <Router>
//         <Login /> {/* Login WON'T get route matching ability! */}
//         <Routes>...</Routes>
//       </Router>

//       ✅ WHY?
//       - <Route> components get special powers (URL matching, hooks)
//       - Manually placed components only get basic routing features

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
