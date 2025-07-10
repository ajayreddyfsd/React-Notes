import { useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams(); // Extract the `id` from the URL return{" "}

  //using the extracted id in whatever the component is returning
  return (
    <div>
      <h1>Showing profile for user: {id}</h1>;
    </div>
  );
};

export default Card;
