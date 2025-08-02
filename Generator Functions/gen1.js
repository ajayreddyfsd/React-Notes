function* myGenerator() {
    console.log("Step 1");
    yield "First pause";
  
    console.log("Step 2");
    yield "Second pause";
  
    console.log("Step 3");
    return "Done!";
  }

  //! initiating the generator
  const gen = myGenerator();

  //! does not return value, but returns an object with value and done
  //! done tells us if the generator is empty or still has values in it
  console.log(gen.next()); // Step 1 → { value: 'First pause', done: false }
  console.log(gen.next()); // Step 2 → { value: 'Second pause', done: false }
  console.log(gen.next()); // Step 3 → { value: 'Done!', done: true }
  console.log(gen.next()); //          { value: undefined, done: true }
  

//! last object returned will be { value: undefined, done: true }
