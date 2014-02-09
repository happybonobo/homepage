var body = document.getElementsByTagName('body')[0];

setInterval(loop, 250);

function loop() {
    var x = getRandomNumber(),
        y = getRandomNumber();
    body.style.backgroundPosition = x + 'px ' + y + 'px';
}

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}