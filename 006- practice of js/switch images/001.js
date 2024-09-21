const mainImages = document.getElementById("mainImg");
const imgItem = document.querySelectorAll(".btnImg");
function imageSwitcher(evt){
    const mainImgSource = evt.target.getAttribute("src");
    mainImages.setAttribute("src", mainImgSource);
    for (const thomb of imgItem) {
        thomb.classList.remove("selected");
    }
    evt.target.classList.add("selected");
}
for (const thomb of imgItem) {
    thomb.addEventListener("click",imageSwitcher);
}