// Now you don’t need to write the word - props. before each one inside the component — you can use the keys directly.

function MyComponent(props) {
  const { name, age, city } = props;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}
