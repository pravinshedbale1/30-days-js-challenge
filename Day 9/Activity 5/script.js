function changeText() {
  let p1 = document.querySelector("#p1");
  p1.textContent =
    "India is my country all indians are my brothers and sisters I love my country";
}

function changeBorderColor() {
  let btn2 = document.querySelector("#btn2");
  let currentClass = btn2.getAttribute("class");
  if (currentClass == "red") {
    btn2.setAttribute("class", "blue");
  } else {
    btn2.setAttribute("class", "red");
  }
}
