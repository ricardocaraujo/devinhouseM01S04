const classifica = document.getElementById("classifica")
classifica.addEventListener('click', classificaNumero)

const mensagem = document.getElementById("mensagem");

function classificaNumero () {
    const idade = document.getElementById("idade").value;
    const idadeInt = parseInt(idade)
    if(idadeInt <= 15) {
        mensagem.textContent = "Jovem"
    } else if(idadeInt > 15 && idadeInt <= 64) {
        mensagem.textContent = "Adulto"
    } else {
        mensagem.textContent = "Idoso"
    }
}