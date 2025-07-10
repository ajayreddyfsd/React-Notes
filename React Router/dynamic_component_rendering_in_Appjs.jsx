import { Routes, Route } from "react-router-dom";
import DynamicComponent from "./DynamicComponent";

function App() {
  return (
    <Routes>
      {/* Single route to handle ALL dynamic paths */}
      <Route path="/:pageName" element={<DynamicComponent />} />
    </Routes>
  );
}

export default App;
