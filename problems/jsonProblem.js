const vehicles = [
  {
    model: [
      {
        name: "BMW",
        color: "Black",
        year: 2025,
      },
      {
        name: "BMW",
        color: "white",
        year: 2020,
      },
    ],
    type: "car",
    wheel: 4,
    id: 1,
  },
  {
    model: [
      {
        name: "Honda",
        color: "Black",
        year: 2025,
      },
      {
        name: "Honda",
        color: "white",
        year: 2020,
      },
      {
        name: "Honda",
        color: "Blue",
        year: 2010,
      },
    ],
    type: "car",
    wheel: 4,
  },
  {
    model: [
      {
        name: "Hero",
        color: "Black",
        year: 2025,
      },
      {
        name: "Hero",
        color: "white",
        year: 2020,
      },
    ],
    type: "Bike",
    wheel: 2,
  },
];

function readJson(carName, year) {
  for (let i = 0; i < vehicles.length; i++) {
    for (let j = 0; j < vehicles[i].model.length; i++) {
      if (vehicles[i].model[j].name == carName && vehicles[i].model[j].year == year) {
        console.log(vehicles[i].model[j]);
      }
    }
  }
}

readJson("BMW", 2020);
