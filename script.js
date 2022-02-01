var count = 3;
var countElement = document.querySelector('#count');
var countElement2 = document.querySelector('#count2');
var countElement3 = document.querySelector('#count3');


function add1(){
    count++
    countElement.innerText = count
}

function add2(){
    count++
    countElement2.innerText = count
}

function add3(){
    count++
    countElement3.innerText = count
}