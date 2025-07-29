//this is the initial state of the component
const initialState = { count: 0 };

// this is a reducer, which is nothing but a js function
// takes in two things, the current state and action to perform on the current state
// and returns the new state
// whats inside it, just a switch case statement
// which tells how to update the state based on the action type.
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

//this is a react component, using useReducer, instead of useState
//why? useReducer is like next level of useState, use when you have complex state logic
//useReducer takes in two things, the reducer function and the initial state
//useReducer returns two things, the current state and the dispatch function
//so whenever we want to update the state, 
// we call the dispatch function, and pass in the action to perform on the current state
//the updated state can be accessed directly throughthe state variable
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1> {/* ✅ Reading state */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button> {/* ✅ Updating state */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
}

