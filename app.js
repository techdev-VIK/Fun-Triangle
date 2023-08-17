const triangleSides = document.querySelectorAll(".sides");
const clickBtn = document.querySelector("#click-btn");
const finalOutput = document.querySelector("#output");

// console.log(triangleSides);



function triangleSum(angle1, angle2, angle3){

    const sum = angle1+angle2+angle3;
    return sum;

//    console.log(sum);

}

function isTriangle(){
    
    const sum = triangleSum(Number(triangleSides[0].value),Number(triangleSides[1].value),Number(triangleSides[2].value));

    console.log(sum);

    if((triangleSides[0].value === 0) || (triangleSides[1].value === 0) || (triangleSides[2].value === 0)){
        if(sum===180){
            console.log("Good");
            finalOutput.value= "Great! This forms a Triangle";
        }else{
            console.log("Bad");
            finalOutput.value= "Sorry! This is not a Triangle";
        }
             
    }
    else{
        finalOutput.value= "Sorry! A side cannot be equal to 0";
        
    }

    
}

clickBtn.addEventListener("click", isTriangle)
