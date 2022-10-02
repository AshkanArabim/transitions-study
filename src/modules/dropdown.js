export default (function (navBar, navBtns) {
  document.addEventListener(
    "click",
    (e) => {
      navBar.classList.remove("clicked");
    },
    true
  );
  navBar.addEventListener(
    "click",
    () => {
      navBar.classList.add("clicked");
    },
    true
  );

  for (let btn of navBtns) {
    btn.addEventListener("mouseover", () => {
      for (let x of navBtns) {
        x.classList.remove("open");
      }
      btn.classList.add("open");
    });
  }
});
