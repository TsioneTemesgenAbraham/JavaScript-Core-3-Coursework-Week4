function sales(carsSold) {
  for (let i = 0; i < carsSold.length; i++) {
    if (carsSold[i].make == "Ford") {
      return (
        `${carsSold[i].make}` + ":" + (carsSold[i].price + carsSold[i].price)
      );
    }
  }
}

module.exports = sales;
