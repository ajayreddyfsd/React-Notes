import { useState } from "react";

const ExpensiveCalculation = ({ number }) => {
  console.log("Calculating...");

  // This calculation runs on every render, even if number didn't change
  const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const fact = factorial(number);

  return (
    <div>
      <p>
        Factorial of {number} is {fact}
      </p>
    </div>
  );
};

