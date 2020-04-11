var rotation = 0;
var remainder = 0;
var mirrorx = 1;
var mirrory = 1
rotateBtn.addEventListener("click", function() {
    const parent = document.getElementById("omSymbol");
    // parent.className += " rotate90";
    rotation+=90;
    // rotationSpan.textContent="rotation: "+rotation;
    // rotationRemainder.textContent="rotationRemainder: "+rotation%180;
    parent.style.transform = `rotate(${rotation}deg) scale(${mirrorx},${mirrory})`;
    // if (rotation===360) {
    //     rotation=0
    // }
});

flipBtn.addEventListener("click", function() {
    const parent = document.getElementById("omSymbol");
    remainder = rotation%180
    if (remainder===0) {
        mirrory*=-1
        // mirrorySpan.textContent="mirrory: "+mirrory;
    } else {
        mirrorx*=-1;
        // mirrorxSpan.textContent="mirrorx: "+mirrorx;
    }
    parent.style.transform = `rotate(${rotation}deg) scale(${mirrorx},${mirrory})`;
});