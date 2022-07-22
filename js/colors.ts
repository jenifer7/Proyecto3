var btnchange = document.querySelector('button');
var fondo = document.querySelector('body');
var coloresb: any = ['blue', 'red', 'pink', 'yellow','aliceblue','aqua'];

btnchange?.addEventListener('click', generarNuevoColor);

function generarNuevoColor(){
	var  icolores = [Math.floor(Math.random()*coloresb.length)];

	fondo.style.backgroundColor = coloresb[icolores];
    document.getElementById('nombreColor').innerHTML = icolores;
}
