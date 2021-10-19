var countOne = 0;
var h4 = document.querySelector('h4');

function clickOne(element){
    countOne++;
    console.log(countOne + " Likes");
    h4.innerText=(countOne + " like(s)");
}