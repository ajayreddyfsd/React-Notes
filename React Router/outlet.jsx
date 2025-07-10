import { Link, Outlet } from "react-router-dom";

// nested routes for nested urls like shown below
// or nested routes when u wanna display one comp by default and also display only one from a grp of other child comps
// parent gets displayed by default and parent can get dispd without child as well
// but if u want child also, then choose one, it goes into outlet
// only one child comp gets to go along with it
// and where in parent does the child sit?
// wherever <Outlet? is placed inside the parent-comp, child-comp sits there

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
