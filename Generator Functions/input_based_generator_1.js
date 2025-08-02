// A generator that keeps a running total
function* hardGenerator() {
    let total = 0;
  
    while (true) {
      // 1. Yield the current total
      // 2. Pause and wait for input via .next(value)
      const num = yield total;
  
      // 3. Add the received number to the total
      total += num;
    }
  }
  
  // Create the generator
  const gen = hardGenerator();
  
  // First call: starts the generator, runs until first yield
  console.log(gen.next());     
  // Output: { value: 0, done: false }
  // - yield total pauses at 0
  // - generator is waiting for input now
  
  console.log(gen.next(5));    
  // Input: 5 → becomes the value of `num`
  // total = 0 + 5 = 5
  // Output: { value: 5, done: false }
  
  console.log(gen.next(3));    
  // Input: 3 → num = 3
  // total = 5 + 3 = 8
  // Output: { value: 8, done: false }
  
  console.log(gen.next(2));    
  // Input: 2 → num = 2
  // total = 8 + 2 = 10
  // Output: { value: 10, done: false }
  
  // This generator never ends (infinite while loop),
  // but you can stop calling `.next()` any time.
  