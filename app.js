"use strict";
let number = 0;
let scoreMessage = "Score";


window.addEventListener("load", initApp);

function initApp() {
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);

  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}

function incrementNumber() {
  // console.log("click+");
  // console.log(number);
  number += 1;
  displayNumber();
  
}

function decrementNumber() {
  // console.log("click-");
  number -= 1;
  displayNumber();
  
  //   document.querySelector("#btn-increment").number -= 1;
}

function displayNumber() {
  // console.log("display Number")
  // opdaterer UI
  document.querySelector("#number").textContent = number;

  let message = "";
  
  if(number > 10){
    message = "The number is above 10 ";
    } 
  else if (number === 10) {
      message = "The number is 10";
    } 
  else {
     message = "The number is below 10 ";
    }

    document.querySelector("#message").textContent = message;
}








// let num = 5
// console.log(number);
// if (num >= 5) {
//   console.log("Tallet er lig med eller større end 5");
// }
// else {
//   console.log("tallet er mindre end 5");
// }

// let fullName = "Hanne";

// if (fullName == "Hanne"){
//   console.log("Ja det er Hanne!")
// }else{console.log("Nej det er ikke Hanne")}