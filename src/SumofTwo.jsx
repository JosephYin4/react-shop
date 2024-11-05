import React from 'react';

function SumOfTwo({ num1, num2 }) {
  // Calculate the sum of the two integers
  const sum = num1 + num2;

  return (
    <div>
      The sum of {num1} and {num2} is {sum}.
    </div>
  );
}

export default SumOfTwo;
