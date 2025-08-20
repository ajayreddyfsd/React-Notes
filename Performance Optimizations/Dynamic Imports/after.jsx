//! we need 2 things - lazy and suspense
//! lazy → tells React: “Don’t import this component now; load it dynamically when needed.”
//! Suspense → tells React: “While the lazy-loaded component is loading, show this fallback UI and build some suspense”

import { useState, lazy, Suspense } from "react";

//$ Step 2: Replace static import with lazy import
//$ HeavyComponent will be loaded only when needed
const HeavyComponent = lazy(() => import("./HeavyComponent"));

const LazyExample = () => {
  // Step 4: Use state to conditionally render the component
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* Button toggles whether the heavy component should be shown */}
      <button onClick={() => setShow(!show)}>Show Component</button>

      {/* 
        Step 3: Wrap the lazy component with Suspense
        Shows fallback UI while the component is being loaded
      */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render HeavyComponent only when 'show' is true */}
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
};

export default LazyExample;

//$ ✅ Summary (Step-by-Step)
// Choose the heavy component you want to lazy load.
// Import it using React.lazy instead of a static import.
// Wrap it in <Suspense> and provide a fallback UI.
// Render conditionally using state or props if needed.
