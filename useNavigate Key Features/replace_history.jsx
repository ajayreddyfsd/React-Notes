import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace current history entry (user can't go back)
    navigate("/dashboard", { replace: true });
  };

  return <button onClick={handleLogin}>Login (No Back Button)</button>;
}

export default LoginButton;
