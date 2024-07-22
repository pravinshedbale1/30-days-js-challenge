setTimeout(() => {
  let extraDiv = document.createElement("div");
  extraDiv.innerText = "This is extra div added";

  let parentDiv = document.querySelector(".main");
  parentDiv.appendChild(extraDiv);

  let perl = document.createElement("li");
  perl.innerText = "Perl (This language added using script)";

  let parentUl = document.querySelector(".languages");
  parentUl.appendChild(perl);
}, 2000);
