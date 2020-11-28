const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
  let workScore = entries[0][1];
  let name = entries[0][0];
  for (let i = 0; i < entries.length; i++) {
    if (workScore < entries[i][1]) {
      workScore = entries[i][1];
      name = entries[i][0];
    }
  }
  return `${name} : ${workScore}`;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

