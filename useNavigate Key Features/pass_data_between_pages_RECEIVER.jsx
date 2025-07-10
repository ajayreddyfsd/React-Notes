import { useLocation } from "react-router-dom";

function Receiver() {
  // Access the sent data
  const location = useLocation();
  const { text, secretCode } = location.state || {};

  return (
    <div>
      <h1>Message: {text}</h1> {/* Shows "Hello!" */}
      <p>Code: {secretCode}</p> {/* Shows "123" */}
    </div>
  );
}

export default Receiver;
