import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login check
    const isLoggedIn = true;

    if (isLoggedIn) {
      navigate("/dashboard"); // Success → go to dashboard
    } else {
      navigate("/login-failed", { replace: true }); // Fail → block back button
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
