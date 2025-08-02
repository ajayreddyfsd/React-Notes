function* easyGenerator() {
    yield "A";
    yield "B";
    yield "C";
  }

  
//! initiating the generator
const gen = easyGenerator();

//! does not return value, but returns an object with value and done
//! done tells us if the generator is empty or still has values in it
console.log(gen.next()); // { value: 'A', done: false }
console.log(gen.next()); // { value: 'B', done: false }
console.log(gen.next()); // { value: 'C', done: false }
console.log(gen.next()); // { value: undefined, done: true }

//! last object returned will be { value: undefined, done: true }