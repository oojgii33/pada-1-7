let i = 0;
let p = 0;
function play(my) {
  console.log("daralt");
  const songolt = ["haich", "chuluu", "daawuu"];
  const randomIndex = Math.floor(Math.random() * 3);
  const com = songolt[randomIndex];
  let result = "";
  if (my === com) {
    result = "tentslee";
  } else if (
    (my === "haich" && com === "daawuu") ||
    (my === "chuluu" && com === "haich") ||
    (my === "daawuu" && com === "chuluu")
  ) {
    result = "ta yallaa";
    i++;
  } else {
    result = "computer yallaa";
    p++;
  }
  document.getElementById("result").innerHTML =
    `Ta: ${my}  | Computer: ${com} → ${result}`;
  document.getElementById("ai").innerHTML = `AI- ${i}`;
  document.getElementById("hun").innerHTML = `Hun- ${p}`;
  const img = document.getElementById("ha");
  const img1 = document.getElementById("ho");
  const img2 = document.getElementById("he");
  const img3 = document.getElementById("hh");
  const img4 = document.getElementById("hhh");
  const img5 = document.getElementById("hhhh");
  if (my === "haich") {
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.transition = "all 1s ease";
    img1.style.width = "0px";
    img1.style.height = "0px";
    img2.style.width = "0px";
    img2.style.height = "0px";
  } else if (my === "chuluu") {
    img1.style.width = "300px";
    img1.style.height = "300px";
    img1.style.transition = "all 1s ease";
    img.style.width = "0px";
    img.style.height = "0px";
    img2.style.width = "0px";
    img2.style.height = "0px";
  } else if (my === "daawuu") {
    img1.style.width = "0px";
    img1.style.height = "0px";
    img.style.width = "0px";
    img.style.height = "0px";
    img2.style.width = "300px";
    img2.style.height = "300px";
    img2.style.transition = "all 1s ease";
  }
  if (com === "haich") {
    img3.style.width = "300px";
    img3.style.height = "300px";
    img3.style.transition = "all 1s ease";
    img4.style.width = "0px";
    img4.style.height = "0px";
    img5.style.width = "0px";
    img5.style.height = "0px";
  } else if (com === "chuluu") {
    img5.style.width = "300px";
    img5.style.height = "300px";
    img5.style.transition = "all 1s ease";
    img3.style.width = "0px";
    img3.style.height = "0px";
    img4.style.width = "0px";
    img4.style.height = "0px";
  } else if (com === "daawuu") {
    img5.style.width = "0px";
    img5.style.height = "0px";
    img3.style.width = "0px";
    img3.style.height = "0px";
    img4.style.width = "300px";
    img4.style.height = "300px";
    img4.style.transition = "all 1s ease";
  }

  // setTimeout(() => {
  //   img.style.transform = "rotate(180deg)";
  //   img4.style.transform = "rotate(180deg)";
  // }, 400);

  // setTimeout(() => {
  //   img.style.transform = "rotate(360deg)";
  //   img4.style.transform = "rotate(360deg)";
  // }, 800);
}
