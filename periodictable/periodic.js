const elements = document.querySelectorAll(".element");
const reader = document.querySelector(".mass_reader");
const modal = document.querySelector(".info_modal");
const close = document.querySelector(".close");

//property declarations
const element_name = document.querySelector(".element-name");
const number = document.querySelector(".element-number");
const abbr = document.querySelector(".element-abbr");
const mass = document.querySelector(".element-mass");
const type = document.querySelector(".element-type");
const boil = document.querySelector(".element-boil");
const melt = document.querySelector(".element-melt");
const discover = document.querySelector(".element-discover");
const wiki = document.querySelector(".element-wiki");


fetch('./data.json').then(response => response.json()).then(obj => { 
    elements.forEach((element, index) => {
        element.addEventListener("click", () => {
            let curEl = obj.elements[index];
            element_name.innerHTML = curEl.name;
            number.innerHTML = curEl.number;
            abbr.innerHTML = curEl.symbol;
            mass.innerHTML = curEl.atomic_mass;
            type.innerHTML = curEl.category;
            if (curEl.boil) {boil.innerHTML = curEl.boil+"K";} else {boil.innerHTML = "unknown";}
            if (curEl.melt) {melt.innerHTML = curEl.melt+"K";} else {melt.innerHTML = "unknown";}
            discover.innerHTML = curEl.discovered_by;
            wiki.setAttribute("href", curEl.source);
            document.body.classList.add("blur");
            modal.show();
        });
    });
}); 

close.addEventListener("click", () => {
    document.body.classList.remove("blur");
    modal.close();
});
