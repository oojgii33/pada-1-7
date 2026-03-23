// // let array = ["cs2", "dota2", "apex", "mlbb", "volarant"];
// // console.log("1-->", array[2]);
// // array[1] = "chess";
// // console.log("2-->", array);
// // array.push("Minecraft", "Mario");
// // console.log("3-->", array);
// // console.log("4-->", array.indexOf("cs2"));
// // console.log(array);

// // let ary1 = [1, 2, 3];
// // let ary2 = [4, 5, 6];
// // let ary3 = ary1.concat(ary2);
// // console.log("5-->", ary3);
// // console.log("6-->", ary3.includes(7));
// // function same(a, b) {
// //   a = a.length;
// //   b = b.length;
// //   if (a === b) {
// //     return true;
// //   } else false;
// // }
// // console.log("7-->", same(ary1, ary2));
// // const words = ["JavaScript", "is", "a", "versatile", "language"];
// // console.log("8-->", words.join("*"));
// // console.log("8-->", words.toString());
// // const big = [1, 41, 23, 52, 123, 521, 324];
// // // while (condition) {

// // // }
// // let a;
// // for (let t = 0; t < big.length; t++) {
// //   for (let i = 0; i < big.length - 1; i++) {
// //     if (big[i] < big[i + 1]) {
// //       a = big[i + 1];
// //       big[i + 1] = big[i];
// //       big[i] = a;
// //     }
// //   }
// // }
// // console.log(big);
// // for (let i = 0; i < big.length; i++) {
// //   if (max < big[i]) max = big[i];
// // }
// // if(big[i]===max){

// // }
// // let big1=[];
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let kav = numbers.map((num) => num * num);
// console.log("1=", kav);
// let people = [
//   { name: "Alice", age: 25 },
//   { name: "bob", age: 35 },
//   { name: "Charlie", age: 28 },
//   { name: "Dave", age: 31 },
// ];
// let peoples = [
//   { name: "Alice1", age: 25, grades: [70, 80, 90] },
//   { name: "bob1", age: 35, grades: [60, 65, 70] },
//   { name: "Charlie1", age: 28, grades: [85, 80, 90] },
//   { name: "Dave1", age: 31, grades: [60, 55, 50] },
// ];
// let products = [
//   { name: "Laptop", catagory: "elec", price: 999 },
//   { name: "headphones", catagory: "elec", price: 35 },
//   { name: "keyboard", catagory: "elec", price: 41 },
//   { name: "shoes", catagory: "oder", price: 55 },
// ];

// let val = people.values();
// let found1 = val.find((number) => number.age > 30);
// console.log("2=", found1);
// let evens = numbers.filter((num) => num % 2 == 0);
// console.log("3=", evens);
// let fruits = ["apple", "banana", "cherry", 11, 33];
// let string = fruits.some((string) => {
//   let length = string.length;
//   for (let index = 0; index < length; index++) {
//     if (string[index] === "s") {
//       return true;
//     }
//   }
// });
// console.log("4=", string);
// let pos = numbers.every((num) => num > 0);
// console.log("5=", pos);
// let newpep = people.filter((num) => num.age > 30).map((num) => num.name);
// console.log("6=", newpep);
// let avg = peoples
//   .filter((num) => {
//     let avg1 = 0;
//     for (let i = 0; i < num.grades.length; i++) {
//       avg1 = num.grades[i] + avg1;
//     }
//     avg1 = avg1 / num.grades.length;
//     return avg1 >= 70;
//   })
//   .map((num) => num.name);
// console.log("7=", avg);
// let choose = products.filter(
//   (num) => num.catagory === "elec" && num.price < 100,
// );
// console.log("8=", choose);

let a = [123, 412, 132, 412];
let b = [567, 658, 657, 564];
let c = a.concat(b);
console.log(c);
let e = a.length;
console.log(e);
function sum(r) {
  let su = 0;
  for (let i = 0; i < r.length; i++) {
    su += r[i];
  }
  return su;
}
console.log(sum(a));
