import { useNavigate } from "react-router-dom";

function Sender() {
  const navigate = useNavigate();

  const sendMessage = () => {
    // Navigate to "/receiver" and send a hidden message
    //$ navigating, as well as sending some data, which we will extract using useLocation
    navigate("/receiver", {
      state: {
        text: "Hello!",
        secretCode: 123,
      },
    });
  };

  return <button onClick={sendMessage}>Send Message</button>;
}

export default Sender;
