var btnchange = document.querySelector('button');
var fondo = document.querySelector('body');
var coloresb = ['blue', 'red', 'pink', 'yellow', 'aliceblue', 'aqua'];
btnchange === null || btnchange === void 0 ? void 0 : btnchange.addEventListener('click', generarNuevoColor);
function generarNuevoColor() {
    var icolores = parseInt(Math.random() * coloresb.length);
    fondo.style.backgroundColor = coloresb[icolores];
    document.getElementById('nombreColor').innerHTML = icolores;
}
