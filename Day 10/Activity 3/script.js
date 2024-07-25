function handleKeyPress(e) {
  console.log(e.key);
}

function handleKeyDown(e) {
  let p1 = document.querySelector("#p1");
  let ip2 = document.querySelector("#ip2");
  ip2.value = p1.textContent;
  console.log(ip2.textContent);
}
