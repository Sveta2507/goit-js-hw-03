/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  id: 0,
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.id += 1;
    return {
      id: this.id,
      amount: amount,
      type: type,
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    let newTransaction = this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      alert("У Вас не достаточно денег");
    } else {
      this.balance -= amount;
      let newTransaction = this.createTransaction(amount, Transaction.WITHDRAW)
      this.transactions.push(newTransaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
*/
getTransactionTotal(type) {
  let total = 0;
  for (let transaction of this.transactions) {
    if (transaction.type === type) {
      total += transaction.amount;
    }
  }
  return total;
},
};

account.deposit(60);
console.log(account.getBalance());
console.log(account.transactions);
account.deposit(100);
account.deposit(200);
account.deposit(300);
account.deposit(400);
account.deposit(500);
account.deposit(600);
console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(3000);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(5));