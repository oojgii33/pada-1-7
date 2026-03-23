// console.log("Hello World");
// let info = { name: "uno", age: 25, height: "175cm", last: "munkh" };
// info.city = "ub";
// // delete info.age;
// info.hobby = "cs2";
// console.log(info);
// info.fullnames = {
//   fullname: function () {
//     return info.name + info.last;
//   },
// };
// info.getKandV = {
//   keys: function (a) {
//     a = Object.keys(info);
//     return a;
//   },
// };

// four 4
// const movie = {
//   name: "movieName",
//   releaseDate: 1999,
// };
// function getkav(a) {
//   c = Object.keys(a);
//   console.log(c);
//   d = Object.values(a);
//   console.log(d);

//   c = c + ", " + d;
//   return c;
// }
// const address = {
//   street: "manlai baatar",
//   city: "ub",
//   zipcode: 70831,
// };
// let student = {
//   name: "bold",
//   age: 25,
// };
// student = Object.assign(address, student);
// // function getaddress(a) {
// //   a = a.toString[length - 1 + length - 2];
// //   return a;
// // }
// // console.log(getaddress(student));
// console.log(student);
// student1.function getaddress(a) {

// }
//6
// let student = {
//   name: "bold",
//   age: 25,
// };
// function updateName(a) {
//   a = student.name;
//   return a;
// }
// console.log(updateName(dood));
//10
const students = {
  1: { name: "bolor", grade: 96 },
  2: { name: "bolor", grade: 94 },
  3: { name: "bolor", grade: 93 },
  4: { name: "bolor", grade: 91 },
  5: { name: "bolor", grade: 92 },
};

const ab = Object.keys(students).length;
function avarage(a) {
  let avg = 0;
  for (let i = 1; i <= ab; i++) {
    avg = avg + a[i].grade;
    // console.log(a[`${i}`].grade);
  }
  avg = avg / ab;
  return avg;
}

console.log("dundaj dun=", avarage(students));

// console.log(avarage(students));

function max1(a) {
  let max = 0;
  for (let i = 1; i <= ab; i++) {
    if (a[i].grade > max) {
      max = a[i].grade;
    }
  }
  return max;
}
console.log("max dun=", max1(students));
// function midup() {
//   for (let i = 0; i < ab; i++) {
//     if (students[i] > avg) {
//       console.log(students[i]);
//     }
//   }
// }
function min1(a) {
  let min = 100;
  for (let i = 1; i <= ab; i++) {
    if (a[i].grade < min) {
      min = a[i].grade;
    }
  }
  return min;
}
console.log("dood dun=", min1(students));

function up(a) {
  for (let i = 1; i <= ab; i++) {
    let avg1 = avarage(students);
    if (avg1 <= a[i].grade) {
      console.log(a[i]);
    }
  }
}
up(students);

console.log("hamgiin ondor onoo bol",toString.max1(students),"ene ni");


//asdasdasdasd
// console.log(getkav(movie));

// console.log(info.fullnames.fullname());
// console.log(info.getKandV.keys(a));

// console.log(info.name);
// console.log(Object.info());
