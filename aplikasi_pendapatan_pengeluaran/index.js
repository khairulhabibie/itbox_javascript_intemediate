const Note = require("./Note");

let note = new Note();
note.addIncome("Gaji Bulanan", 5000);
note.addExpense("Bayar Listrik", 1000);
note.listIncome();
note.listExpense();
note.balance();
// console.log(note);
