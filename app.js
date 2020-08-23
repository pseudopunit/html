const slide = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

const prevbtn = document.querySelector("#prevbtn");
const nextbtn = document.querySelector("#nextbtn");

let counter = 1;
const size = images[1].clientWidth;
//683;
slide.style.transform = "translateX(" + (-size * counter) + "px)";

nextbtn.addEventListener("click", () => {
    if(counter >= images.length -1) return;
  slide.style.transition = "transform 0.3s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevbtn.addEventListener("click", () => {
    if(counter <= 0) return;
    slide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

slide.addEventListener('transitionend', () => {
    if(images[counter].id === "lastimg"){
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if(images[counter].id === "firstimg"){
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

j = 0;
function slideleft(){
  if(counter >= images.length -1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + (-size * counter) + "px)";
}

function act(){
    slideleft();
}
const tog = document.querySelector("#tog");
i = 1;
var id;
tog.addEventListener("click", () => {
    i++;
    if(i%2 == 0){
        id = setInterval(act, 1600);
        document.getElementById("tog").innerHTML = "Stop";
        setTimeout(slideleft(), 200);
    }
    else if (i%2 != 0){
        clearInterval(id);
        document.getElementById("tog").innerHTML = "Start";
    }
});

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".random img");
const original = document.querySelector(".fullimg");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        const orgsrc = preview.getAttribute("data-original");
        original.src = orgsrc;
        const alttext = preview.alt;
        caption.textContent = alttext;
    });
});

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});

const list = document.querySelectorAll(".li-item li");
const point = document.querySelectorAll('.li-item span');

list.forEach(preview => {
    preview.addEventListener('mouseenter', e => {
        preview.classList.add("openn");
        preview.classList.remove("unopen");
        const orgcol = preview.firstElementChild.getAttribute("orgcol");
        preview.firstElementChild.style.color = orgcol;
        preview.firstElementChild.classList.add("open");
        
        // point.classList.add("open");
        // console.log(list.classList);

    });
    preview.addEventListener('mouseleave', e => {
        preview.classList.add("unopen");
        preview.classList.remove("openn");
        preview.firstElementChild.classList.remove("open");
        // point.classList.remove("open");

    });
});
