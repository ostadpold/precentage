let inputs = document.querySelectorAll("input");

let correctAws;
let wrongAws;
let allAws;
let numerator;
let denominator;
let result;
let display;
let detail;

function equals(){
    correctAws = Number(inputs[0].value);
    wrongAws = Number(inputs[1].value);
    allAws = Number(inputs[2].value);
    
    result = (100*(3*correctAws - wrongAws) / (3*allAws)).toString();
    result = result.slice(0,4);
    secondresult =  (100*(3*correctAws - 0) / (3*allAws)).toString();
    secondresult = secondresult.slice(0,4);

    displayer(result, secondresult);
}

function displayer(result,secondresult){
    if(result == "NaN" || result == "Infi"){
        display = inputs[4];
        display.classList.remove("hidden");
        display.classList.replace("text-blue-500","text-red-500");
        display.classList.replace("dark:text-blue-400","dark:text-red-500");
        display.value = `خطا!`;
    }else{
        display = inputs[4];
        display.classList.remove("hidden");
        display.classList.replace("text-red-500","text-blue-500");
        display.classList.replace("dark:text-red-500","dark:text-blue-400");
        display.value = `${result}%`;
    }

    if(secondresult !== result){
        detail = document.querySelector("p");
        detail.classList.remove("hidden");
        detail.innerHTML = `اگر سوالات اشتباهت رو نزده میزاشتی درصدت <span class="font-semibold text-red-500">${secondresult}%</span>میشد.`;
    }else {
        detail.innerHTML = "";
        detail.classList.add('hidden');
    }
}

// function change(event){
//     console.log(event);
//     if(event.keyCode == 40){
//         for(let i=0;i<inputs.length;i++){
//             if(document.activeElement == inputs[i]){
//                 let n = i;
//                 inputs[n+1].focus();
//                 console.log('hey');
//             }
//         }
//         // console.log(document.activeElement);
//     }
// }