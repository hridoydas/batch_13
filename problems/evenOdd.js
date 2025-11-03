// [22, 87, 89, 23, 3, 60, 33]

const data_list = [22, 87, 89, 23, 3, 60, 33];
oddEven(data_list);

function oddEven(data) {
  for (let index in data) {
    if (data[index] % 2 == 0) {
      console.log(`${data[index]} is an Even number`);
    } else {
      console.log(`${data[index]} is an Odd number`);
    }
  }
}
