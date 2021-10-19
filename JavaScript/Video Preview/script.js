console.log("page loaded...");

var clip = document.querySelectorAll('.clip');

clip.addEventListener('mouseenter')
function playClip(elvideo) {
    clip.play();    
}
    
clip.addEventListener('mouseout')
function pauseClip(video) {
    clip.pause();    
}

