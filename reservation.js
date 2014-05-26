var reservation1 = "Austin";
var reservation2 = "Kevin";
var reservation3 = "Carl";

while(true){
    var name = prompt("What's your name?");

    if(name === reservation1 || name === reservation2 || name === reservation3){
        alert("Welcome to the restaurant!");
    }else{
        alert("I'm sorry, we don't have you down. Please make a reservation.");
    }
}
