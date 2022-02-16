function circle1Clicked() {
    let count = document.getElementById("circle1Text").innerHTML;
    count++;
    document.getElementById("circle1Text").innerHTML = count;
}

function circle2MouseOver() {
    document.getElementById("circle2").style.stroke = "black";
    document.getElementById("circle2").style.strokeWidth = "10px";
}

function circle2MouseOut() {
    document.getElementById("circle2").style.strokeWidth = "0px";
}

function circle3Clicked() {
    if (document.getElementById("circle3").style.opacity == "0") {
        document.getElementById("circle3").style.opacity = "1"
    } else {
        document.getElementById("circle3").style.opacity = "0"
    }
}