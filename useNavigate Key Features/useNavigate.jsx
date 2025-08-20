//! Link-tag and a-tag, when user wants to go somewhere
//! Link-tag, when user wants to go somewhere inside
//! a-tag, when user wants to go somewhere outside
//! useNavigate() is when its not the user that wants to go, but the app is sending the user to go somewhere

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login check
    const isLoggedIn = true;

    if (isLoggedIn) {
      navigate("/dashboard"); // Success → go to dashboard
    } else {
      navigate("/login-failed", { replace: true }); // Fail → block back button //$ navigating, as well as sending some data, which we will extract using useLocation
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
}

export default Login;
