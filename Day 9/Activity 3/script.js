setTimeout(() => {
  let childToRemove = document.querySelector(".header");
  childToRemove.removeChild(childToRemove.firstElementChild);

  let languages = document.querySelector(".languages");
  languages.removeChild(languages.lastElementChild);
}, 2000);
