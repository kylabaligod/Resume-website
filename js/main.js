
var welcome_message = "This is a welcome message stored inside a variable";

alert(welcome_message);

console.log("This is a log!");

var isPremiumUser = false;

if(isPremiumUser == true) {
    console.log("Thanks for being a loyal customer")
}else{
    console.log("You should subscribe to our premium service.")
}

var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log("Button Clicked") ;
    btn.removeEventListener("click", buttonClicked);
}

btn.addEventListener("click", buttonClicked);

var numbers = [43, 55, 10, 25, 27, 33, 101, 102, 603, 707, 99, 87]

var numero = [2, 5, 3, 6, 1, 9, 4]