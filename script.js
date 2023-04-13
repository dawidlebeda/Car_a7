// objects variables: car, roads, inscriptions, garage and roof
const car = document.querySelector("#car");

const cube_invisible = document.querySelector(".cube");

const inscription_welcomehome = document.querySelector(".inscription");

const inscription_gameover2 = document.querySelector(".inscription2");
const inscription_gameover3 = document.querySelector(".inscription3");
const inscription_gameover4 = document.querySelector(".inscription4");
const inscription_gameover5 = document.querySelector(".inscription5");
const inscription_gameover6 = document.querySelector(".inscription6");
const inscription_gameover7 = document.querySelector(".inscription7");

const road = document.querySelector(".road");
const road2 = document.querySelector(".road2");
const road3 = document.querySelector(".road3");
const road4 = document.querySelector(".road4");
const road5 = document.querySelector(".road5");
const road6 = document.querySelector(".road6");

const garage = document.querySelector(".garage");
const garage2 = document.querySelector(".garage2");
const garage3 = document.querySelector(".garage3");

const roof = document.querySelector(".roof");
const roof2 = document.querySelector(".roof2");

//move of a car

  document.body.addEventListener("keypress", function (event) {
    var oldLeft = getComputedStyle(car).left;
    var oldTop = getComputedStyle(car).top;
  
    oldLeft = parseInt(oldLeft, 10);
    oldTop = parseInt(oldTop, 10);
  
    if (event.key == "a") {
      newLeft = oldLeft - 10;
    } else if (event.key == "d") {
      newLeft = oldLeft + 10;
    } else if (event.key == "s") {
      newTop = oldTop + 10;
    } else if (event.key == "w") {
      newTop = oldTop - 10;
    }
  
  
    car.style.left = newLeft + "px";
    car.style.top = newTop + "px";

   // collision detection variables

    let carbounds = car.getBoundingClientRect();
    let cubebounds = cube_invisible.getBoundingClientRect();
    let roadbounds = road.getBoundingClientRect();
    let road2bounds = road2.getBoundingClientRect();
    let road3bounds = road3.getBoundingClientRect();
    let road4bounds = road4.getBoundingClientRect();
    let road5bounds = road5.getBoundingClientRect();
    let road6bounds = road6.getBoundingClientRect();
   
   // car and transparent cube collision detection witch displays green inscription "Welcome Home"

    if (carbounds.bottom >= cubebounds.top && carbounds.right >= cubebounds.left && carbounds.left <= cubebounds.right && carbounds.top <= cubebounds.bottom) {
       
        inscription_welcomehome.classList.add("TextColor2");
        garage.classList.add("touch2");
        garage2.classList.add("touch2");
        garage3.classList.add("touch2");
        roof.classList.add("touch2");
        roof2.classList.add("touch2");
       
    } else {
       
        
        inscription_welcomehome.classList.remove("TextColor2");
        garage.classList.remove("touch2");
        garage2.classList.remove("touch2");
        garage3.classList.remove("touch2");
        roof.classList.remove("touch2");
        roof2.classList.remove("touch2");
    }

    // car and road1 collision detection witch displays red inscription "Game Over"
  
    const isCollisionTop = carbounds.bottom >= roadbounds.top &&
        carbounds.right >= roadbounds.left &&
        carbounds.left <= roadbounds.right &&
        carbounds.top <= roadbounds.bottom;

    if (isCollisionTop) {
        road.classList.add("touch"), inscription_gameover2.classList.add("TextColor");
    } else {
        road.classList.remove("touch"), inscription_gameover2.classList.remove("TextColor");
    }

    // car and road2 collision detection witch displays red inscription "Game Over"

    if (carbounds.bottom >= road2bounds.top && carbounds.right >= road2bounds.left && carbounds.left <= road2bounds.right && carbounds.top <= road2bounds.bottom) {
        road2.classList.add("touch"), inscription_gameover3.classList.add("TextColor");
    } else {
        road2.classList.remove("touch"), inscription_gameover3.classList.remove("TextColor");
    }

    // car and road3 collision detection witch displays red inscription "Game Over"

    if (carbounds.bottom >= road3bounds.top && carbounds.right >= road3bounds.left && carbounds.left <= road3bounds.right && carbounds.top <= road3bounds.bottom) {
        road3.classList.add("touch"), inscription_gameover4.classList.add("TextColor");
    } else {
        road3.classList.remove("touch"), inscription_gameover4.classList.remove("TextColor");
    }

    // car and road4 collision detection witch displays red inscription "Game Over"

    if (carbounds.bottom >= road4bounds.top && carbounds.right >= road4bounds.left && carbounds.left <= road4bounds.right && carbounds.top <= road4bounds.bottom) {
        road4.classList.add("touch"), inscription_gameover5.classList.add("TextColor");
    } else {
        road4.classList.remove("touch"), inscription_gameover5.classList.remove("TextColor");
    }

    // car and road5 collision detection witch displays red inscription "Game Over"

    if (carbounds.bottom >= road5bounds.top && carbounds.right >= road5bounds.left && carbounds.left <= road5bounds.right && carbounds.top <= road5bounds.bottom) {
        road5.classList.add("touch"), inscription_gameover6.classList.add("TextColor");
    } else {
        road5.classList.remove("touch"), inscription_gameover6.classList.remove("TextColor");
    }

    // car and road6 collision detection witch displays red inscription "Game Over"

    if (carbounds.bottom >= road6bounds.top && carbounds.right >= road6bounds.left && carbounds.left <= road6bounds.right && carbounds.top <= road6bounds.bottom) {
        road6.classList.add("touch"), inscription_gameover7.classList.add("TextColor");
    } else {
        road6.classList.remove("touch"), inscription_gameover7.classList.remove("TextColor");
    }
    
});
