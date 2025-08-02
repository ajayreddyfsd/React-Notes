function* mediumGenerator() {
    for (let i = 1; i <= 3; i++) {
      yield i;
    }
  }

const gen = mediumGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
