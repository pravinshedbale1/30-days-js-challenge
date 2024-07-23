let btn1 = document.querySelector("#btn1");
btn1.addEventListener("dblclick", function (event) {
  let img = document.getElementById("img");
  img.style.display = img.style.display === "block" ? "none" : "block";
});
