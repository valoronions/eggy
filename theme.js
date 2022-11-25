const themeCheck = document.querySelector(".theme-checkbox");
const body = document.body;
const fetchLocalStorage = localStorage.getItem("isLight");

localStorage.setItem("isLight", themeCheck.checked);

themeCheck.addEventListener("change", () => {
    localStorage.setItem("isLight", themeCheck.checked);
    body.classList.toggle("light-mode");
});

window.onload = function() {
    if (fetchLocalStorage == "true") {
        body.classList.toggle("light-mode");
        themeCheck.checked = true;
    }
}

































