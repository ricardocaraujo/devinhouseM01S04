const ano = prompt('Digite um ano')

const diferenca = ano - new Date().getFullYear();

alert(`A diferença entre o ano digitao e o ano atual é ${diferenca}`)