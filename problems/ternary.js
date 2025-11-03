function odd(number) {
  let result;
  if (number == 0) {
    result = "even";
  } else if (number % 2 !== 0) {
    result = "odd";
  } else {
    result = "even";
  }

  return result;
}
// console.log(odd(1));

function terOdd(number) {
  const result = number == 0 ? "even" : number % 2 !== 0 ? "odd" : "even";
  return result;
}

console.log(terOdd(5));
