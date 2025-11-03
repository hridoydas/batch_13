// 5! = 5 * 4! = 120

function factorialRecursion(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * factorialRecursion(number - 1);
  }
}

console.log(factorialRecursion(5));
// (5) * (factorialRecursion(4))
// (5) * ((4) * factorialRecursion(3))
// (5) * ((4) * (3)* factorialRecursion(2))
// (5) * ((4) * (3)* (2) * factorialRecursion(1))
// (5) * (4) * (3)* (2) * (1)
