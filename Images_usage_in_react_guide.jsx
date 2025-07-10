import React from "react";

/* 
  ============================================
  IMAGE STORAGE PATHS & FILE STRUCTURE:
  ============================================

  1. Method 1 (Import): Bundled with JavaScript
    - Storage: src/assets/
    - File structure:
      src/
        ├── assets/
        │   └── logo.png       # Image file
        └── components/
            └── ImageDemo.jsx  # This component

  2. Method 2 (Public): Static files
    - Storage: public/images/
    - File structure:
      public/
        ├── images/
        │   └── hero.jpg       # Image file
        └── index.html
*/

// Method 1: Import image (Webpack optimized)
import logo from "./assets/logo.png";

const ImageDemo = () => {
  // for Method 3: Dynamic image path example
  const userImage = "profile-123.jpg";

  return (
    <div style={{ padding: "20px" }}>
      {/*
        ============================================
        METHOD 1: IMPORTED IMAGE
        - Use for: Static assets (logos, UI elements)
        - Benefits: Webpack optimization, cache busting
        - Path: Relative to JS file ('./assets/')
      */}
      <img
        src={logo}
        alt="Company Logo"
        style={{ height: "50px", margin: "10px" }}
      />

      {/*
        ============================================
        METHOD 2: PUBLIC FOLDER IMAGE
        - Use for: Large assets/CDN fallbacks
        - Path: Relative to public folder ('/images/')
        - Note: Files won't be processed by Webpack
      */}
      <img
        src={`/images/hero.jpg`}
        alt="Hero Banner"
        style={{ width: "100%", maxWidth: "600px", margin: "10px" }}
      />

      {/*
        ============================================
        METHOD 3: DYNAMIC PUBLIC PATH
        - Use for: User-generated content
        - Path: Built at runtime from variables
      */}
      <img
        src={`/images/users/${userImage}`}
        alt="User Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />

      {/* 
        ======================
        METHOD 4: Inline SVG
        - Perfect for icons/simple graphics
        - Style with CSS/JS directly
      */}
      <svg width="100" height="100" style={{ margin: "20px" }}>
        <circle cx="50" cy="50" r="40" fill="blue" />
        <text x="50" y="55" textAnchor="middle" fill="white">
          SVG
        </text>
      </svg>

      {/* 
        ======================
        METHOD 5: CSS Background
        - For decorative images
        - Can use imported or public images
      */}
      <div style={divStyle}></div>

      {/* 
        ======================
        METHOD 6: Dynamic Paths
        - Build paths using template literals
        - Useful for user-generated content
      */}
      <img
        src={`/images/${dynamicImageName}.jpg`}
        alt="Dynamic path image"
        width="200"
      />

      {/* 
        ======================
        BONUS: Lazy Loading
        - Add to any <img> tag
        - Improves page load performance
      */}
      <img
        src="/images/large-image.jpg"
        alt="Lazy loaded image"
        loading="lazy"
        width="200"
      />
    </div>
  );
};

export default ImageDemo;
