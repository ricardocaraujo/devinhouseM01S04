const data = document.getElementById("data")
const mensagem = document.getElementById("mensagem")
const imagem = document.getElementById("imagem")

const atualizaEstacao = ({texto, url}) => {
    mensagem.innerText = texto;
    imagem.src = url;
}

const verificaEstacao = (event) => {

    const dataFormatada = new Date(`${event.target.value} 00:00`)

    if(!(dataFormatada instanceof Date) || isNaN(dataFormatada)){
        alert("A data não é válida")
        return
    }

    const dia = dataFormatada.getDate();

    const mes = dataFormatada.getMonth() + 1;

    if((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
        atualizaEstacao({texto: 'Outono', url: './imagens/outono.jpeg'})
        return
    }

    if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {
        atualizaEstacao({ texto: 'Inverno', url: './imagens/inverno.jpg' });
        return;
    }
    
    if ((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)) {   
        atualizaEstacao({ texto: 'Primavera', url: './imagens/primavera.jpeg' });
        return;
    }
    
    atualizaEstacao({ texto: 'Verão', url: './imagens/verao.jpg' });

}


data.onchange = verificaEstacao;