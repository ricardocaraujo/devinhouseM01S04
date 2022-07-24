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
            idContas.innerHTML += `<option>${conta.nome} ${conta.saldo}</option>`

            /* const option = document.createElement("option");
            option.textContent = `${conta.nome} ${conta.saldo}`;
            idContas.appendChild(option); */
        })
    }

    document.body.onload = adicionaContas();