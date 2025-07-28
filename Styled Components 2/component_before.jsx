// StyledComponentsExampleBefore.jsx
import React from 'react';
import './StyledComponentsExampleBefore.scss'; // Regular SCSS file

function StyledComponentsExampleBefore() {
  return (
    <div className="container">
      <h2>Hello 👋</h2>
      <a href="#" className="link">Visit Link</a>
      <br />
      <button className="button">Click Me</button>
      <ul className="list">
        <li className="list-item">First item</li>
        <li className="list-item">Second item</li>
        <li className="list-item">Third item</li>
      </ul>
    </div>
  );
}

export default StyledComponentsExampleBefore;
