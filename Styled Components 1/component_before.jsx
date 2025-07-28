// CardBefore.jsx
import React from 'react';
import './CardBefore.scss'; // regular SCSS, not a module

function CardBefore() {
  return (
    <div className="card">
      <h2 className="title">Welcome</h2>
      <p className="subtitle">This is a styled card using SCSS.</p>
      <button className="button">Click Me</button>
    </div>
  );
}

export default CardBefore;
