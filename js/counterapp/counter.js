let number = 0;

function increase(){

    number++;

    document.getElementById("count").innerHTML =
    number;

}

function decrease(){

    number--;

    document.getElementById("count").innerHTML =
    number;

}

function reset(){

    number = 0;

    document.getElementById("count").innerHTML =
    number;

}