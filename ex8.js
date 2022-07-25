const verifica = document.getElementById("verifica")
verifica.addEventListener('click', verificaNumero)

const mensagem = document.getElementById("mensagem");

function verificaNumero () {
    const numero = document.getElementById("numero").value;
    const numeroInt = parseInt(numero)
    mensagem.textContent = numeroInt % 2 === 0 ? "Número par" : "Número impar";
}