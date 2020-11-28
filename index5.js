const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let money;
  for (let i = 0; i < allProdcuts.length; i += 1) {
    let values = Object.values(allProdcuts[i]);
    if (values[0] === productName) {
      money = values[1] * values[2];
      return money;
    }
  }

  console.log(calculateTotalPrice(products, "Радар")); // 5200
  console.log(calculateTotalPrice(products, "Дроид"));
};
