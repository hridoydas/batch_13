function condition(data) {
  if (typeof data == "number" || typeof data == "string") {
    console.log(`Current data is: ${data}. And ${data} is a valid type data`);
  } else {
    console.log(`${data} is not a number either not a string type data`);
  }
}

condition(4);
