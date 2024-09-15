const images = document.querySelectorAll("img");
const btn1 = document.querySelectorAll("button");
//console.log(images[4].getAttribute("src"));
function imageSwitcher(){
    let imgMother = images[0].getAttribute("src");
    let item1 = images[1].getAttribute("src");
    let item2 = images[2].getAttribute("src"); 
    let item3 = images[3].getAttribute("src"); 
    let item4 = images[4].getAttribute("src"); 
    if(document.getElementById('img1').clicked == true){
        images[0].setAttribute("src", item1);
    }else if(document.getElementById('img2').clicked == true){
        images[0].setAttribute("src", item2);
    }else if(document.getElementById('img3').clicked == true){
        images[0].setAttribute("src", item3);
    }else if(document.getElementById('img4').clicked == true){
        images[0].setAttribute("src", item4);
    }
}