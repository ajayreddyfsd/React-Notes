import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* Simple text logo */}
      <Link to="/">Home</Link>

      {/* Basic navigation links */}
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
