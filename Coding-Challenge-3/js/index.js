
var isNumber = /^\d+$/
//omodificar isnumber para que sea un regex que valide positivos

var getTheFizz = document.getElementById("submitBtn");
var input = document.querySelector(".fizz-buzz-item");

getTheFizz.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(input.value);
    console.log(isNumber.test(input.value));

    if(isNumber.test(input.value)){
        let x = Number(input.value);
        for(var i = 1; i<x; i++){
            if(i%15 == 0){
                console.log("fizzbuzz");
            }else if(i%3 == 0){
                console.log("fizz");
            }else if(i%5 == 0){
                console.log("buzz");
            }else{
                console.log(i);
            }
        }
    }
})