// StyledExampleBefore.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './StyledExampleBefore.scss';

function StyledExampleBefore() {
  return (
    <div className="container">
      <h2 className="title">Hello 👋</h2>
      <a href="#" className="link">External Link</a><br />
      <Link to="/about" className="router-link">About Page</Link><br />
      <button className="button">Click Me</button>
      <ul className="list">
        <li className="list-item">First item</li>
        <li className="list-item">Second item</li>
      </ul>
    </div>
  );
}

export default StyledExampleBefore;
