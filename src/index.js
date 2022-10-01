import("./reset.css");
import("./style.css");

const navBtns = Array.from(document.querySelectorAll(".navbtn"));

for (navBtnIndex in navBtns) {
  navBtnIndex.addEventListener("hover", () => {
    navBtns[navBtnIndex].classList.remove("");
  });
}
