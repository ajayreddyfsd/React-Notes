/*
| Feature              | Class Component (CC)                       | Functional Component (FC)             |
|----------------------|--------------------------------------------|-------------------------------------|
| Syntax               | Class extending React.Component            | Function that returns JSX            |
| Props Access         | this.props                                 | props or destructured in params     |
| State Declaration    | this.state in constructor                   | useState hook                       |
| State Update         | this.setState method                        | setState function from useState     |
| Event Handler Binding| Bind 'this' or use arrow functions         | No binding needed                   |
| 'this' usage         | Must use 'this' to access props/state      | No 'this' keyword                   |
| Constructor Needed   | Yes, when using state or accessing props   | No                                 |
| Lifecycle Methods    | componentDidMount, componentDidUpdate, etc.| useEffect & hooks                   |
*/
