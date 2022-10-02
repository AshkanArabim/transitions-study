import("./reset.css");
import("./style.css");
import dropdown from "./modules/dropdown";

const navBar = document.querySelector("nav");
const navBtns = Array.from(document.querySelectorAll("nav>ul>li"));

dropdown(navBar, navBtns);
