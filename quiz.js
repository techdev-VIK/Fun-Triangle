const quizForm = document.querySelector(".quiz-form");
const buttonClick = document.querySelector("#button-click");
const output = document.querySelector("#output");
const correctAnswers = ["60°", "Equilateral"];



function calculateScore(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);

    for(let value of formResults.values()){

        if(value === correctAnswers[index]){

        score=score+1;
    }

    index=index+1;

    }

    output.value="Your Score is => " + score;
}



buttonClick.addEventListener("click", calculateScore)