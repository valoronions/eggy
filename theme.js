const themeCheck = document.querySelector(".theme-checkbox");
const body = document.body;
const fetchLocalStorage = localStorage.getItem("isLight");
const cells = document.querySelectorAll("td");
const modal = document.querySelector(".info_modal");
const links = document.querySelectorAll("a");
const projectList = document.querySelector(".projects-list");

localStorage.setItem("isLight", themeCheck.checked);

themeCheck.addEventListener("change", () => {
    localStorage.setItem("isLight", themeCheck.checked);
    body.classList.toggle("light-mode");
    if (modal && cells) {
        cells.forEach((cell, index) => {
            cell.classList.toggle("light-mode-borders");
            cell.classList.toggle("light-mode-cellhover");
        });
        modal.classList.toggle("light-mode-modal");
    }
    links.forEach((link, index) => {
        link.classList.toggle("light-mode-links");
    });
    projectList.classList.toggle("projects-list-light");
});

window.onload = function() {
    localStorage.setItem("isLight", themeCheck.checked);
    if (fetchLocalStorage == "true") {
        body.classList.toggle("light-mode");
        themeCheck.checked = true;
        localStorage.setItem("isLight", themeCheck.checked);
        if (modal && cells) {
            cells.forEach((cell, index) => {
                cell.classList.toggle("light-mode-borders");
                cell.classList.toggle("light-mode-cellhover");
            });
            modal.classList.toggle("light-mode-modal");
        }
        links.forEach((link, index) => {
            link.classList.toggle("light-mode-links");
        });
    } else {
        themeCheck.checked = false;
    }
}

