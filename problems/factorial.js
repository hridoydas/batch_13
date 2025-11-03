// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 5! = 5 * 4! = 120
// 0! = 1, 1! = 1

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i; /**120 */
  }

  //   console.log(`factorial of ${number} is: ${result}`);
  return result;
}

function two() {
  const data = factorial(4);
  console.log(data);
}

two();
