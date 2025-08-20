//! all are router wrappers, but says which to use in which case
//! all are router wrappers, but says which to use in which case
//! all are router wrappers, but says which to use in which case
//! all are router wrappers, but says which to use in which case
//! all are router wrappers, but says which to use in which case

/**
 * =============================================
 *           React Router Types Guide
 * =============================================
 *
 * 1. <BrowserRouter> (Recommended for modern SPAs)
 *    - Use Case: Apps with server-side support for clean URLs.
 *    - URL Style: `example.com/about`
 *    - Requires: Server must redirect all requests to index.html.
 *    - Best For: Production-ready apps with dynamic routing.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

/**
 * 2. <HashRouter> (For static hosting like GitHub Pages)
 *    - Use Case: When you can't configure the server.
 *    - URL Style: `example.com/#/about`
 *    - Pros: No server config needed.
 *    - Cons: Ugly URLs, not SEO-friendly.
 */
import { HashRouter } from "react-router-dom";
function StaticApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

/**
 * 3. <MemoryRouter> (Testing/Non-browser environments)
 *    - Use Case: Unit tests or React Native/Electron apps.
 *    - URL Style: No visible URL (in-memory history).
 *    - Example: Simulating navigation in Jest tests.
 */
import { MemoryRouter } from "react-router-dom";
function TestApp() {
  return (
    <MemoryRouter initialEntries={["/about"]}>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}

/**
 * 4. <StaticRouter> (Server-Side Rendering - SSR)
 *    - Use Case: Next.js or custom SSR setups.
 *    - URL Style: N/A (used on server to mimic routing).
 *    - Key: Pass the request URL as `location`.
 */
import { StaticRouter } from "react-router-dom/server";
function ServerApp(req) {
  return (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
}

/**
 * 5. <NativeRouter> (React Native Apps)
 *    - Use Case: Mobile apps with React Native.
 *    - URL Style: Uses native navigation stack.
 *    - Note: Part of 'react-router-native' package.
 */
import { NativeRouter } from "react-router-native";
function MobileApp() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </NativeRouter>
  );
}

/**
 * 6. Generic <Router> (Advanced Custom Routing)
 *    - Use Case: Custom history management (e.g., analytics).
 *    - How: Manually create history with `createBrowserHistory`.
 */
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function CustomRouterApp() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

/**
 * =============================================
 *           Quick Reference Table
 * =============================================
 * | Router          | Use Case                | URL Example          |
 * |-----------------|-------------------------|----------------------|
 * | BrowserRouter   | Production SPAs         | example.com/about    |
 * | HashRouter      | Static hosting          | example.com/#/about  |
 * | MemoryRouter    | Tests/Non-browser envs  | (No URL)             |
 * | StaticRouter    | SSR (Next.js)           | N/A                  |
 * | NativeRouter    | React Native            | Native navigation    |
 * | Router          | Custom history          | Depends on config    |
 */
