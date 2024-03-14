let switchMode = document.querySelector(".js-theme");

switchMode.addEventListener("click", () => {
  let theme = document.querySelector("#theme");

  if (theme.getAttribute("href") == "./css/main-white.min.css") {
    theme.setAttribute("href", "./css/main-dark.min.css");
  } else {
    theme.setAttribute("href", "./css/main-white.min.css");
  }
});
