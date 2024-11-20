var txt = 'owner of extort.services';
var speed = 95;
var eraseSpeed = 80;
var loopCount = 0;
var maxLoop = 0;
var forward = true;

function typeWriter() {
    var typewriter = document.getElementById("typewriter");
    var textLength = txt.length;

    if (forward) {
        if (typewriter.innerHTML.length < textLength) {
            typewriter.innerHTML += txt.charAt(typewriter.innerHTML.length);
            setTimeout(typeWriter, speed);
        } else {
            forward = false;
            setTimeout(typeWriter, speed * 3);
        }
    } else {
        if (typewriter.innerHTML.length > 0) {
            typewriter.innerHTML = typewriter.innerHTML.slice(0, -1);
            setTimeout(typeWriter, eraseSpeed);
        } else {
            forward = true;
            setTimeout(typeWriter, speed * 3);
        }
    }
}

window.onload = function () {
    typeWriter();
};