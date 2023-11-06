const { Income, Expense } = require("./IncomeExpense");
const fs = require("fs");

class Note {
  static listIncome() {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    let incomes = temp.incomes;
    console.log("List Income :");
    incomes.forEach((income) => {
      const { name, total } = income;
      console.log(`${name}, Rp. ${total}`);
    });
  }
  static lisExpense() {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    let expenses = temp.expenses;
    console.log("List Income :");
    expenses.forEach((expense) => {
      const { name, total } = expense;
      console.log(`${name}, Rp. ${total}`);
    });
  }

  static addIncome(name, total) {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    let income = new Income(name, total, "income");
    temp.incomes.push(income);
    // console.log(temp);
    this.save(temp);
  }

  static addExpense(name, total) {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    let expense = new Expense(name, total, "expense");
    temp.expenses.push(expense);
    // console.log(temp);
    this.save(temp);
  }

  static balance() {
    let temp = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    let totalIncome = 0;
    let totalExpense = 0;
    temp.incomes.forEach((income) => {
      totalIncome += income.total;
    });
    temp.expenses.forEach((expense) => {
      totalExpense += expense.total;
    });

    // Status " plus, minus, balance"
    let total = totalIncome - totalExpense;
    if (total === 0) {
      console.log("Status : Balanced!");
    } else if (total < 0) {
      console.log("Status : Minus!");
    } else if (total > 0) {
      console.log("Status : Plus!");
    }
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = Note;
