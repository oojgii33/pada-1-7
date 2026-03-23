const hariu = document.getElementById("delgets");
let temdeg = "";
let a = "";
let b = "";
touch = (value) => {
  hariu.innerHTML += value;
  if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "%"
  ) {
    temdeg = value;
    hariu.value = temdeg;
  } else {
    hariu.value += value;
    if (temdeg === "") {
      a += value;
    } else b += value;
  }
};
const tootsool = () => {
  let result = 0;
  if (temdeg == "+") {
    result = parseFloat(a) + parseFloat(b);
  } else if (temdeg == "-") {
    result = parseFloat(a) - parseFloat(b);
  } else if (temdeg == "/") {
    result = parseFloat(a) / parseFloat(b);
  } else if (temdeg == "*") {
    result = parseFloat(a) * parseFloat(b);
  } else if (temdeg == "%") {
    result = (parseFloat(b) * parseFloat(a)) / 100;
  }
  if (typeof result === "number") {
    result = parseFloat(result.toFixed(12));
  }
  hariu.value = result;
  a = result.toString();
  b = "";
};
const cleard = () => {
  hariu.value = "";
  a = "";
  b = "";
  temdeg = "";
  hariu.innerHTML = "";
};
const delet = (c) => {
  let i = "";
  for (let p = 0; p < c.length - 1; p++) {
    i += c[p];
  }
  return i;
};
const dele = () => {
  hariu.value = delet(hariu.value);
  if (temdeg == "") {
    a = delet(a);
  } else {
    b = delet(b);
  }
};
