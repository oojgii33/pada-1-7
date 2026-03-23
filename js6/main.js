class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    console.log(`hello ${this.name}`);
  }
}

const person = new Person("john", 21, "male");
person.greet();
class Student extends Person {
  constructor(name, age, gender, studentID) {
    super(name, age, gender);
    this.studentID = studentID;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}
const student = new Student("bob", 20, "male", "ju4191");
student.study();
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  getInventoryValue() {
    let total = 0;

    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].getTotalPrice();
    }
    //  for (let items of this.items) {
    //   total += items.getTotalPrice();
    // }

    return total;
  }

  //   printInventory() {
  //     for (let item of this.items) {
  //       console.log(
  //         `Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Total: ${item.getTotalPrice()}`,
  //       );
  //     }
  //   }
  printInventory() {
    this.items.forEach((item) => {
      console.log(
        `Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Total: ${item.getTotalPrice()}`,
      );
    });
  }
}
const item1 = new Item("apple", 2, 10);
const item2 = new Item("banana", 1, 20);
const item3 = new Item("milk", 5, 5);

const inventory = new Inventory();

inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);

inventory.printInventory();

console.log("Total inventory value:", inventory.getInventoryValue());

inventory.removeItem("banana");

console.log("After removing banana:");
inventory.printInventory();
console.log("Total inventory value:", inventory.getInventoryValue());
