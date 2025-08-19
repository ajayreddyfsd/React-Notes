import { useState, useCallback } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // ❌ BAD: Not including `count` in dependencies
  const incrementWrong = useCallback(() => {
    setCount(count + 1); // Always uses the old count value
  }, []); // empty dependency → function never updates

  // ✅ CORRECT: Include `count` in dependencies
  const incrementCorrect = useCallback(() => {
    setCount(count + 1);
  }, [count]); // updates function whenever count changes

  // ✅ Better approach: use "prev" value, then empty dependency is fine
  const incrementBetter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // doesn't depend on count anymore

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementWrong}>Increment Wrong</button>
      <button onClick={incrementCorrect}>Increment Correct</button>
      <button onClick={incrementBetter}>Increment Better</button>
    </div>
  );
};

export default Counter;
