/*
  ================================
  How <Link> and Routes Work
  ================================

  - The <Link> tag just changes the URL in the browser.
  - When the URL changes, React Router looks at the routes we set up in app.js.
  - In app.js, we import all the requiredpage components and tell React Router which one to show for each URL.

  - That’s why we don’t need to import the page components inside the Navigation component, coz all it does is changing URL in browser
  - but we do need to import in app.js coz it is actually doing something BTS
  -this is how app.js support navigation component BTS

  - Navigation only needs <Link> tags to update the URL.
  - The actual showing of pages happens in app.js based on the URL.

  So basically, <Link> just changes the URL, so no component imports, 
  and app.js does the actual job, so need component imports.
*/
