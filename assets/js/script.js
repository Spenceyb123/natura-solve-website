//to switch tile-img when browser resized from mobile to landscape
let wastewater = document.getElementsByClassName('tile-img wastewater')[0];

let mine = document.getElementsByClassName('tile-img mine')[0];

let mosquito = document.getElementsByClassName('tile-img mosquito')[0];

window.innerWidth > window.innerHeight ? wastewater.src = "natural-wastewater-treatment-landscape.png" : wastewater.src = "natural-wastewater-treatment-mobile.png";
    
window.innerWidth > window.innerHeight ? mine.src = "mine-remediation-landscape.png" : mine.src = "mine-remediation-mobile.png";

window.innerWidth > window.innerHeight ? mosquito.src = "mosquito-control-natural-landscape.png" : mosquito.src = "mosquito-control-natural-mobile.png";

window.innerWidth > window.innerHeight ? mosquito.src = "mosquito-control-natural-landscape.png" : mosquito.src = "mosquito-control-natural-mobile.png";

    

function reportWindowSize() {
  window.innerWidth > window.innerHeight ? wastewater.src = "natural-wastewater-treatment-landscape.png" : wastewater.src = "natural-wastewater-treatment-mobile.png";
    
  window.innerWidth > window.innerHeight ? mine.src = "mine-remediation-landscape.png" : mine.src = "mine-remediation-mobile.png"; 
    
    window.innerWidth > window.innerHeight ? mosquito.src = "mosquito-control-natural-landscape.png" : mosquito.src = "mosquito-control-natural-mobile.png";
}

window.onresize = reportWindowSize;
//to switch tile-img when browser resized from mobile to landscape


       
 
    // window.onclick = function(){
    //      alert("Your browser size is: " + window.innerWidth + "x" + window.innerHeight)
    // };