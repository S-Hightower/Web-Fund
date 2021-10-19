var countOne = 0;
var countTwo = 0;
var countThree = 0;
var neilCounter = document.querySelector("#neilCounter");
var nicholeCounter = document.querySelector("#nicholeCounter");
var jimCounter = document.querySelector("#jimCounter");

function clickOne(element){
    countOne++;
    console.log(countOne + " Likes");
    neilCounter.innerText=(countOne + " like(s)");
}

function clickTwo(element){
    countTwo++;
    console.log(countTwo + " Likes");
    nicholeCounter.innerText=(countTwo + " like(s)");
}

function clickThree(element){
    countThree++;
    console.log(countThree + " Likes");
    jimCounter.innerText=(countThree + " like(s)");
}