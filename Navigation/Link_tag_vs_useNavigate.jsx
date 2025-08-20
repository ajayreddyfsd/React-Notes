{
  /*
  WHEN TO USE: useNavigate vs Link
  ===============================

  | Situation                  | useNavigate               | Link                     |
  |----------------------------|---------------------------|--------------------------|
  | Navigation menus           | ❌ No                     | ✅ <Link to="/about">     |
  | Button clicks              | ✅ navigate('/about')     | ❌ Avoid                 |
  | Form submissions          | ✅ After submit           | ❌ No                    |
  | Conditional redirects      | ✅ if (loggedIn) navigate | ❌ No                    |
  | Programmatic navigation   | ✅ Timer/API response     | ❌ No                    |
  | Simple anchor-like links   | ❌ Overkill               | ✅ <Link to="/contact">  |
  | Passing state/data        | ✅ { state: { data } }    | ✅ state={{ data }}      |
  | Browser history control   | ✅ Back/Forward (navigate(-1)) | ❌ No            |
*/
}

//! RULE OF THUMB:
// - Use <Link> for CLICKABLE LINKS (menus, anchors)
//? case where clicks the link and wants to go somewhere

// - Use useNavigate() for ACTION-BASED NAVIGATION (buttons, forms, logic)
//? for progrmmatic navigation, case where you are directing the user to go somewhere, by somwhere i mean the webpage
