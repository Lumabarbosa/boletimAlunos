// alunos e notas
// swith case (resultado e inserir novos alunos, listar notas e sair)
// arredondar notas

const prompt = require('prompt-sync')()
const math = require('mathjs')

let listaNomes = []
let listaNotasUm = []
let listasNotasDois = []
let listaMedia = []
let listaAprovacao = []

// laço input de dois alunos
function cadastroAlunos(){
    console.log('---------------Vamos começar o cadastro do aluno---------------')
    let nome = prompt('Digite o nome do aluno: ')
    listaNomes.push(nome)
    let notaUm = parseFloat(prompt(`Digite a sua primeira nota: `))
    listaNotasUm.push(notaUm)
    let notaDois = parseFloat(prompt(`Digite a sua segunda nota: `))
    listasNotasDois.push(notaDois)
    let media = (notaUm + notaDois)/2
    let arredond = arredondar(media)
    listaMedia.push(media)  
    listaAprovacao.push(resultado(arredond)) 
}


// função arredondamento média
function arredondar(media){
    console.log(Math.ceil(media))
}

function resultado(arredond){
    if (arredond >= 7) {
        return "Parabéns! Você foi aprovado!"
    } else if (arredond <= 5) {
        return "Reprovado. Não foi dessa vez."
    } else {
        return "Você precisa recuperar sua nota! Vamos te dar mais uma chance. Boa Sorte!"
    }
}

// criando objeto
function boletim(Aluno, Nota1, Nota2, Média, Resultado){
    this.Aluno = listaNomes
    this.Nota1 = listaNotasUm
    this.Nota2 = listasNotasDois
    this.Média = listaMedia
    this.Resultado = listaAprovacao
}
const bo = new boletim(this.Aluno, this.Nota1, this.Nota2, this.Média, this.Resultado)

// mensagem interativa
function menu(){
let num
console.log('----------------------------------------------------------------------')
console.log('Escolha uma das ações a seguir e digite o algarismo correspondente:')
console.log('1 - Resultado')
console.log('2 - Listar Notas')
console.log('3 - Inserir novos alunos')
console.log('4 - SAIR')
num = Number(prompt('Digite o número:'))

switch (num){
    case 1:
        console.log(resultado())
        break
    case 2:
        console.table(bo)
        break
    case 3:
        console.log(cadastroAlunos())
        console.log(menu())
        break
    case 4:
        console.log('Até logo.')
        break
}
}
cadastroAlunos()
menu()



