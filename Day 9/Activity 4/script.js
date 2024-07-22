setTimeout(() => {
  let image = document.querySelector("#language-img");
  image.setAttribute("src", "img2.webp");
  let h3 = document.querySelector(".h3-1");
  h3.textContent = "";

  let h32 = document.querySelector(".h3-2red");
  h32.setAttribute("class", "h3-2blue");
  h32.textContent = "Color changed";
}, 2000);
