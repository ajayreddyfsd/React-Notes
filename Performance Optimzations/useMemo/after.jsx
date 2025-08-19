import { useState, useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  console.log("Calculating...");

  // useMemo memorizes the result of factorial, recalculates only if number changes
  const fact = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // only recalculate if number changes

  return (
    <div>
      <p>
        Factorial of {number} is {fact}
      </p>
    </div>
  );
};
