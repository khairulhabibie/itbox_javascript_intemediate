const fs = require("fs");
const { Chicken, Duck, Turkey, Quail, Other } = require("./Poultry.js");

class Farm {
  static readCSV() {
    let temp = fs.readFileSync("./poultries.csv", "utf8");
    let tempSplit = temp.split("\r\n");

    let tempData = [];
    for (let i = 1; i < tempSplit.length; i++) {
      tempData.push(tempSplit[i].split(","));
    }

    let poultries = tempData.map((data) => {
      let [id, category, price, isMature] = data;
      switch (category) {
        case "chicken":
          return new Chicken(+id, +price, isMature);
        case "duck":
          return new Duck(+id, +price, isMature);
        case "turkey":
          return new Turkey(+id, +price, isMature);
        case "quail":
          return new Quail(+id, +price, isMature);
        default:
          return new Other(+id, +price, isMature);
      }
    });
    return poultries;
  }
  static total() {
    let poultries = this.readCSV();
    let count = {
      chiken: 0,
      duck: 0,
      turkey: 0,
      quail: 0,
      other: 0,
    };
    poultries.forEach((poultry) => {
      let { category } = poultry;
      switch (category) {
        case "chicken":
          count.chiken++;
          break;
        case "duck":
          count.duck++;
          break;
        case "turkey":
          count.turkey++;
          break;
        case "quail":
          count.quail++;
          break;
        default:
          count.other++;
      }
    });
    console.log("Total poultries :");
    console.log(`Chiken : ${count.chiken} pcs`);
    console.log(`Duck : ${count.duck} pcs`);
    console.log(`Turkey : ${count.turkey} pcs`);
    console.log(`Quail : ${count.quail} pcs`);
    console.log(`Other : ${count.other} pcs`);
  }

  static addPoultry(category, price) {
    let poultries = this.readCSV();
    let id = poultries[poultries.length - 1].id + 1;
    switch (category) {
      case "chicken":
        poultries.push(new Chicken(+id, +price));
        break;
      case "duck":
        poultries.push(new Duck(+id, +price));
        break;
      case "turkey":
        poultries.push(new Turkey(+id, +price));
        break;
      case "quail":
        poultries.push(new Quail(+id, +price));
        break;
      default:
        poultries.push(new Other(+id, +price));
        break;
    }
    this.save(poultries);
  }

  static save(poultries) {
    let temp = [];
    let result = [["id,category,price,isMature"]];

    poultries.map((data) => {
      let { id, category, price, isMature } = data;
      temp.push([id, category, price, isMature]);
    });

    temp.map((data) => {
      result.push(data.join(","));
    });
    let fixResult = result.join("\r\n");
    console.log(fixResult);
    fs.writeFileSync("./poultries.csv", fixResult);
  }

  static sellPoultry(id) {
    let poultries = this.readCSV();
    poultries = poultries.filter((poultry) => poultry.id !== +id);
    // console.log(poultries);
    this.save(poultries);
  }
}

module.exports = Farm;
