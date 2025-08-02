function* averageCalculator() {
  let total = 0;
  let count = 0;

  while (true) {
    // yield the current average (0 on first run), and wait for next number
    const num = yield (count === 0 ? 0 : total / count);

    // once we receive a value (num), we add it to the total
    total += num;

    // and increase the count
    count++;
  }
}

// Create the generator object
const gen = averageCalculator();

// 1️⃣ Start the generator — it runs until the first `yield`
console.log(gen.next()); 
// Output: { value: 0, done: false }
// It paused at: yield count === 0 ? 0 : total / count
// So first average is 0

// 2️⃣ Send in 10
console.log(gen.next(10));
// - num = 10
// - total = 10
// - count = 1
// Now next loop runs and yields 10 / 1 = 10
// Output: { value: 10, done: false }

// 3️⃣ Send in 20
console.log(gen.next(20));
// - num = 20
// - total = 30
// - count = 2
// Now yields 30 / 2 = 15
// Output: { value: 15, done: false }

// 4️⃣ Send in 30
console.log(gen.next(30));
// - num = 30
// - total = 60
// - count = 3
// Yields 60 / 3 = 20
// Output: { value: 20, done: false }

// 5️⃣ Send in 40
console.log(gen.next(40));
// - num = 40
// - total = 100
// - count = 4
// Yields 100 / 4 = 25
// Output: { value: 25, done: false }
