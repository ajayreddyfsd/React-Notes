import { Link, Outlet } from "react-router-dom";

function Parent() {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h1>Parent Component</h1>
      <nav>
        <Link to="child1">Show Child1</Link> |
        <Link to="child2">Show Child2</Link> |
        <Link to="child3">Show Child3</Link>
      </nav>

      {/* Child components appear here! */}
      <div
        style={{ border: "2px solid red", marginTop: "20px", padding: "10px" }}
      >
        <Outlet />
      </div>
    </div>
  );
}
