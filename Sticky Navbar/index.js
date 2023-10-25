const navbarEl = document.querySelector
(".navbar")

const bottomContainerEl = document.querySelector
(".bottom-container")

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomContainerEl.offsetTop 
     - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
     }else{
        navbarEl.classList.remove("active")
     }
})

const imageContainerEl = document.querySelector
(".image-container")

const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")
let x = 0
let timer;
prevEl.addEventListener("click", ()=>{
x = x + 45;
clearTimeout(timer)
updateGallery()
});
nextEl.addEventListener("click", ()=>{
x = x - 45;
clearTimeout(timer)

updateGallery()
});

function updateGallery(){
    imageContainerEl.style.transform = 
    `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
x = x -45
updateGallery()
    },3000)
}
updateGallery()