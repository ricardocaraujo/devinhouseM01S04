let variavel = 0;

const decrementa = document.getElementById("decrementa");
decrementa.addEventListener('click', decrementaValor);

const incrementa = document.getElementById("incrementa");
incrementa.addEventListener('click', incrementaValor);

const valor = document.getElementById("valor");


function decrementaValor() {
    variavel--;
    valor.textContent = variavel;
}

function incrementaValor() {
    variavel++;
    valor.textContent = variavel;
}