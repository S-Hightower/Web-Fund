console.log("page loaded...");

var clip = document.querySelector("#clip");

clip.addEventListener('mouseenter')
function playClip(element) {
    clip.play();    
}
    
clip.addEventListener('mouseout')
function pauseClip(element) {
    clip.pause();    
}

