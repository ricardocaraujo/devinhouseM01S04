const contasClientes = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    },
    ];

const adicionaContas = () => {
    const idContas = document.getElementById("contas");
    contasClientes.forEach(conta => {
        idContas.innerHTML += `<option id="${conta.id}">${conta.nome} ${conta.saldo}</option>`

        /* const option = document.createElement("option");
        option.textContent = `${conta.nome} ${conta.saldo}`;
        idContas.appendChild(option); */
    })
}


const executa = document.getElementById("executa");
executa.onclick = () => {
    const optionOperacao = document.getElementById("operacao");
    const selecaoOperacao = optionOperacao.options[optionOperacao.selectedIndex].text;
    let valor = document.getElementById("valor").value;
    valor = parseInt(valor);
    const optionConta = document.getElementById("contas");
    let selecaoConta = optionConta.options[optionConta.selectedIndex].id;
    selecaoConta = parseInt(selecaoConta);
    //const selecaoContaInt = parseInt(selecaoConta)
    const conta = contasClientes.find(conta => conta.id === selecaoConta)
    console.log(selecaoConta)
    console.log(conta)
    console.log(selecaoOperacao)
    if(selecaoOperacao.toLowerCase() === "sacar") {
        console.log('chegou aqui')
        saca(conta, valor)
    } else if(selecaoOperacao.toLowerCase() === "depositar") {
        deposita (conta, valor)
    }
    
}

// executa.addEventListener('click', saca);

const saca = (conta, valor) => {
    if(valor <= 0) {
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Valor menor do que 0"
    } else if(valor > conta.saldo) {
        mensagem.textContent = `Saldo insuficiente. Saldo: ${conta.saldo}`
    } else {
        conta.saldo = conta.saldo - valor;
        mensagem.textContent = `Saque realizado. Saldo: ${conta.saldo}`
        console.log(contasClientes)
    }
    
}

const deposita = (conta, valor) => {
    if(valor <= 0) {
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Valor menor do que 0"
    } else {
        conta.saldo = conta.saldo + valor;
        mensagem.textContent = `Depósito realizado. Saldo: ${conta.saldo}`
        console.log(contasClientes)
    }
}


document.body.onload = adicionaContas();