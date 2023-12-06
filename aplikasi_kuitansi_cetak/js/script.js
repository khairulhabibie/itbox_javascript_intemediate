let BtnSubmit = document.getElementById("btnSubmit");

let cards = [];

function submitHandler() {
  if (cards.length === 0) {
    id = 1;
  } else {
    id = cards[cards.length - 1].id + 1;
  }
  let barangValue = document.getElementById("barang").value;
  let hargaValue = document.getElementById("harga").value;
  let namaValue = document.getElementById("nama").value;

  let tempObj = {
    id,
    nama: barangValue,
    harga: +hargaValue,
  };
  document.getElementById("namaCard").innerHTML = namaValue;
  cards.push(tempObj);
  getCards();
  console.log(cards);
}

function getCards() {
  let tBody = document.getElementById("tBody");
  tBody.innerHTML = "";
  cards.forEach((card) => {
    tBody.innerHTML += `<tr>
    <td>${card.id}</td>
    <td>${card.nama}</td>
    <td>${card.harga}</td>
    </tr>`;
  });
}

BtnSubmit.addEventListener("click", submitHandler);

function printHandler() {
  document.querySelector(".form-item").style.display = "none";
  document.querySelector(".form-box").style.display = "none";
  BtnPrint.style.display = "none";
  window.print();
}

let BtnPrint = document.getElementById("btnPrint");
BtnPrint.addEventListener("click", printHandler);
