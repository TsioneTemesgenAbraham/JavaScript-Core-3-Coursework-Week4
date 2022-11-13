// function sales(carsSold) {

//   for (let i = 0; i < carsSold.length; i++) {
//     if (carsSold[i].make == "Ford") {
//       return (
//         find(carsSold[i])
//       );
//     }
//   }

// }

function sales(carsSold) {
  carsSold.filter((car) => {
    if (car.make == "Ford") {
      car.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
    }
  });
}

module.exports = sales;
