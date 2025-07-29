// dispatch calls the reducer function, passing:
// the current state
// the action you specified
// the action inturn is a object with action.type and action.payload


//this is the initial state of the component
const initialState = {
    title: '',
    completed: false,
  };
  
// this is a reducer, which is nothing but a js function
// takes in two things, the current state and action to perform on the current state
// and returns the new state
// whats inside it, just a switch case statement
// which tells how to update the state based on the action type.
function reducer(state, action) {
    switch (action.type) {
      case 'TOGGLE':
        return { ...state, completed: !state.completed };
      case 'SET_TITLE':
        return { ...state, title: action.payload };
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
const [state, dispatch] = useReducer(reducer, initialState);
  
//so whenever we want to update the state, 
// we call the dispatch function, and pass in the action to perform on the current state
//the updated state can be accessed directly throughthe state variable
dispatch({ type: 'TOGGLE' });

//sometimes, if u wanna specify additional info along with the action,
//you can do that by passing the info through a payload
dispatch({ type: 'SET_TITLE', payload: 'Learn React' });

