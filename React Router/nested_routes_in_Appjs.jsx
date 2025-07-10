import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from "./components/Parent";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";

// nested routes for nested urls like shown below
// or nested routes when u wanna display one comp by default and also display only one from a grp of other child comps
// parent gets displayed by default and parent can get dispd without child as well
// but if u want child also, then choose one, it goes into outlet
// only one child comp gets to go along with it
// and where in parent does the child sit?
// wherever <Outlet? is placed inside the parent-comp, child-comp sits there

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
        <Route path="/parent" element={<Parent />}>
          {/* Child Routes */}
          <Route path="child1" element={<Child1 />} /> // URL: /parent/child1
          <Route path="child2" element={<Child2 />} /> // URL: /parent/child2
          <Route path="child3" element={<Child3 />} /> // URL: /parent/child3
        </Route>
      </Routes>
    </Router>
  );
}

export default App;