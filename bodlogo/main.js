const users = [
  {
    id: 1,
    name: "Bat",
    age: 20,
    salary: 1200000,
    isActive: true,
    department: "IT",
    email: "bat@gmail.com",
    address: { city: "Ulaanbaatar", district: "Bayanzurkh" },
  },
  {
    id: 2,
    name: "Bold",
    age: 17,
    salary: 800000,
    isActive: false,
    department: "HR",
    email: "bold@gmail.com",
    address: { city: "Darkhan", district: "Center" },
  },
  {
    id: 3,
    name: "Saraa",
    age: 25,
    salary: 1500000,
    isActive: true,
    department: "Finance",
    email: "saraa@gmail.com",
    address: { city: "Ulaanbaatar", district: "Sukhbaatar" },
  },
  {
    id: 4,
    name: "Bat",
    age: 30,
    salary: 2000000,
    isActive: false,
    department: "IT",
    email: "bat2@gmail.com",
    address: { city: "Erdenet", district: "Center" },
  },
  {
    id: 5,
    name: "Anu",
    age: 22,
    salary: 1100000,
    isActive: true,
    department: "Marketing",
    email: "anu@gmail.com",
    address: { city: "Ulaanbaatar", district: "Chingeltei" },
  },
  {
    id: 6,
    name: "Temuulen",
    age: 28,
    salary: 1800000,
    isActive: true,
    department: "IT",
    email: "temuulen@gmail.com",
    address: { city: "Darkhan", district: "New" },
  },
  {
    id: 7,
    name: "Naraa",
    age: 19,
    salary: 900000,
    isActive: false,
    department: "HR",
    email: "naraa@gmail.com",
    address: { city: "Ulaanbaatar", district: "Songino" },
  },
  {
    id: 8,
    name: "Bataa",
    age: 35,
    salary: 2500000,
    isActive: true,
    department: "Finance",
    email: "bataa@gmail.com",
    address: { city: "Erdenet", district: "Center" },
  },
];

for (let i = 0; i < users.length; i++) {
  console.log("1", users[i].name);
}
let niilber = 0;
let tsalin = 0;
for (let i = 0; i < users.length; i++) {
  niilber += users[i].age;
  tsalin += users[i].salary;
}
console.log("2=buh nasnii niilber", niilber);
max = 0;
min = 10000000000;
for (let i = 0; i < users.length; i++) {
  if (max < users[i].age) {
    max = users[i].age;
  }
}
console.log("3=hamgiin ih nas", max);
console.log("4=buh salary", tsalin);
const add = [];
let f = 0;
for (let i = 0; i < users.length; i++) {
  if (true === users[i].isActive) {
    add.push(users[i]);
    f++;
  }
}
console.log("5", add);
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Bat") {
    console.log("6", users[i]);
  }
}
let count = 0;
users.forEach(() => count++);
console.log("7", count);

for (let i = 0; i < users.length; i++) {
  users[i].status = "new";
}
console.log("8", users);

for (let i = 0; i < users.length; i++) {
  users[i].name = users[i].name.toUpperCase();
  console.log("9", users[i].name);
}

for (let i = 0; i < users.length; i++) {
  if (min > users[i].salary) {
    min = users[i].salary;
  }
}
console.log("10", min);
let lowage = users.filter((user) => user.age > 18);
console.log("11", lowage);
console.log("12");
let same = [];
for (let i = 0; i < users.length - 1; i++) {
  for (let p = i + 1; p < users.length; p++) {
    if (users[i].name === users[p].name) {
      console.log(users[i]);
      console.log(users[p]);
      same.push(users[p]);
      same.push(users[i]);
    }
  }
}
let abc;
for (let i = 0; i < users.length; i++) {
  for (let p = 0; p < users.length - 1; p++) {
    if (users[p].salary < users[p + 1].salary) {
      abc = users[p];
      users[p] = users[p + 1];
      users[p + 1] = abc;
    }
  }
}
console.log("14", users);
let newmas = [];
for (let i = 0; i < users.length; i++) {
  newmas.push(users[i].email);
}
console.log(newmas);
let ob = users.find((user) => user.id === 3);
console.log("ene", ob);

let d = 0;
let b = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].salary > 100000) {
    d++;
    b += users[i].salary;
  }
}
console.log("17", b / d);
for (let i = 0; i < users.length; i++) {
  users[i].age += 1;
  console.log(users[i].age);
}
console.log("19", f);
let max1 = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].name.length > max1) {
    max1 = users[i].name.length;
  }
}
for (let i = 0; i < users.length; i++) {
  if (max1 == users[i].name.length) {
    console.log(users[i]);
  }
}
////13,22,24,26,28
for (let i = 0; i < 3; i++) {
  console.log("23", newmas[i]);
}
let eb = users.find((user) => user.name === "Bat"); ///25
for (let i = 0; i < users.length; i++) {
  ///29
  console.log(users[i].address.city);
}
console.log("21", same);
let users1 = users.sort(users.name);
console.log("13", users1);
let abc1;
for (let i = 0; i < users.length; i++) {
  for (let p = 0; p < users.length - 1; p++) {
    if (users[p].age < users[p + 1].age) {
      abc1 = users[p];
      users[p] = users[p + 1];
      users[p + 1] = abc1;
    }
  }
}
console.log(users);
