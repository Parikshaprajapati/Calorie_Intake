//  preloader

var loader;
function loadNow(opacity){
window.setTimeout(function(){
      if(opacity<=0){
          displayContent();
      }else{
          loader.style.opacity=opacity;
          loadNow(opacity-0.1);
      } 
        },50);
    
    }

function displayContent(){
    loader.style.display="none";
    loader.style.opacity=0;
document.querySelector(".content").style.display="block";
}

window.addEventListener('DOMContentLoaded',function(){
   loader=document.querySelector(".loader");
    window.setTimeout(function(){
        loadNow(1);
        },3000);
});

// calculator

//selectors

const weightInput=document.getElementById("weightvalue");
const heightInput=document.getElementById("heightvalue");
const submitButton=document.querySelector("#submit");
const output=document.querySelector("#output");

//Event Listener

submitButton.addEventListener('click',checkValid);


// functions

function checkValid(e){
    e.preventDefault();
    output.innerHTML=""; 
    
if(heightInput.value==="" || weightInput.value===""){
        alert("Null values are not acceptable!!");
        
    }
    else if(isNaN(heightInput.value) || isNaN(weightInput.value)){
        alert("Only Numbers are acceptable as input !!");
         heightInput.value="";
         weightInput.value="";
     }
     else if(heightInput.value==0 || weightInput.value==0){
        alert("Zero is not acceptable as input !!");
         heightInput.value="";
         weightInput.value="";
     }
    else{
        calculateCalories();
    }
}



function calculateCalories(){
    let idealBodyWeight=heightInput.value-100;
    let balance=weightInput.value-idealBodyWeight;
    let calorieIntake;
    let message;
    
    if(balance>5){
        calorieIntake=idealBodyWeight*20;
        message="Kcal. You are overweight!!";
    }else if(balance<-5){
        calorieIntake=idealBodyWeight*30;
        message="Kcal. You are underweight!!";
    }
    else{
        calorieIntake=idealBodyWeight*25;
        message="Kcal. You are healthy!!";       
    }
       
  output.innerHTML=calorieIntake+message; 
    heightInput.value="";
    weightInput.value="";
}




























