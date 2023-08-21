const inputPick = document.querySelectorAll(".input-pick");
const calculateHyp = document.querySelector("#calculate-Hyp");
const output = document.querySelector("#output");

function squares(a,b){
    const sumOfSquares = a*a+b*b;
    return sumOfSquares;
}

function calculate(){
    const sumOf= squares(Number(inputPick[0].value), Number(inputPick[1].value));
    const realHypotenuse = Math.sqrt(sumOf);

    output.innerText = "The Hypotenuse is " + realHypotenuse
}

calculateHyp.addEventListener("click", calculate);