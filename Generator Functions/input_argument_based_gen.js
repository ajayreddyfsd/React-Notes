function* greet(name) {
    yield `Hello, ${name}`;
  }
  
  const gen = greet("Ajay");
  console.log(gen.next()); // { value: 'Hello, Ajay', done: false }
  
  