var p = document.getElementsByTagName('p')[0];

degrees = 0;
function rotate() {
    degrees += 360;
    p.style.transform = "rotate("+degrees+"deg)";
    p.style['-webkit-transform'] = "rotate("+degrees+"deg)";
}

setInterval(rotate, 4000);
