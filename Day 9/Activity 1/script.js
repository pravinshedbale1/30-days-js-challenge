setTimeout(() => {
  let title = document.querySelector("#title");
  title.textContent = "1 day to go for next challenge";

  let message = document.querySelector("#message");
  message.textContent = "Title and color changed";

  let header = document.querySelector(".header");
  header.style.backgroundColor = "orange";
}, 2000);
