// DOM button
let btnIncome = document.getElementById("btnIncome");
let btnExpense = document.getElementById("btnExpense");

// Global variabel
let transaction = {
  income: [
    {
      id: 1,
      transaksi: "Gajian",
      saldo: 5000,
    },
  ],
  expense: [
    {
      id: 1,
      transaksi: "Tagihan Listrik",
      saldo: 100,
    },
  ],
};

// Function
function incomeHandler() {
  //   input
  let namaValue = document.getElementById("nama").value;
  let saldoValue = document.getElementById("saldo").value;
  let id;
  if (transaction.income.length === 0) {
    id = 1;
  } else {
    id = transaction.income[transaction.income.length - 1].id + 1;
  }
  let tempObj = {
    id,
    transaksi: namaValue,
    saldo: +saldoValue,
  };
  transaction.income.push(tempObj);
  getTransaction();
  saldoCount();
  alert(`income : ${namaValue} telah di tambahkan sebesar ${saldoValue}`);
}
function expenseHandler() {
  //   input
  let namaValue = document.getElementById("nama").value;
  let saldoValue = document.getElementById("saldo").value;
  let id;
  if (transaction.expense.length === 0) {
    id = 1;
  } else {
    id = transaction.expense[transaction.expense.length - 1].id + 1;
  }
  let tempObj = {
    id,
    transaksi: namaValue,
    saldo: +saldoValue,
  };
  transaction.expense.push(tempObj);
  getTransaction();
  saldoCount();
  alert(`expense : ${namaValue} telah di tambahkan sebesar ${saldoValue}`);
}
function getTransaction() {
  // tBody table
  let tBodyInc = document.getElementById("tBody-inc");
  let tBodyExp = document.getElementById("tBody-exp");
  tBodyInc.innerHTML = "";
  tBodyExp.innerHTML = "";
  transaction.income.forEach((inc) => {
    tBodyInc.innerHTML += `<tr>
    <td>${inc.id}</td>
    <td>${inc.transaksi}</td>
    <td>${inc.saldo}</td>
    </tr>`;
  });
  transaction.expense.forEach((exp) => {
    tBodyExp.innerHTML += `<tr>
    <td>${exp.id}</td>
    <td>${exp.transaksi}</td>
    <td>${exp.saldo}</td>
    </tr>`;
  });
}
function saldoCount() {
  let saldoIncome = 0;
  let saldoExpense = 0;
  transaction.income.forEach((inc) => {
    saldoIncome += +inc.saldo;
  });
  transaction.expense.forEach((exp) => {
    saldoExpense += +exp.saldo;
  });
  let balance = saldoIncome - saldoExpense;
  let saldoBalance = document.getElementById("saldo-balance");
  saldoBalance.innerHTML = balance;
  //   console.log(balance);
}
// Add Event Listener
btnIncome.addEventListener("click", incomeHandler);
btnExpense.addEventListener("click", expenseHandler);
getTransaction();
saldoCount();
