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


const slide2 = document.querySelector('.slides2');
const images2 = document.querySelectorAll('.slides2 img');

const prevbtn2 = document.querySelector("#prevbtn2");
const nextbtn2 = document.querySelector("#nextbtn2");

let counter2 = 1;
const size2 = images2[1].clientWidth;
//683;
slide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";

nextbtn2.addEventListener("click", () => {
  if(counter2 >= images2.length -1) return;
  slide2.style.transition = "transform 0.3s ease-in-out";
  counter2++;
  slide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
});

prevbtn2.addEventListener("click", () => {
    if(counter2 <=0) return;
    slide2.style.transition = "transform 0.3s ease-in-out";
    counter2--;
    slide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
});

slide2.addEventListener('transitionend', () => {
    if(images2[counter2].id === "lastimg2"){
        slide2.style.transition = "none";
        counter2 = images2.length - 2;
        slide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
    }
    if(images2[counter2].id === "firstimg2"){
        slide2.style.transition = "none";
        counter2 = images2.length - counter2;
        slide2.style.transform = "translateX(" + (-size2 * counter2) + "px)";
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

//   $(document).ready(function(){
//     $("#tog").click(function(){
//       $(".slidecontainer").toggle();
//     });
//   });
