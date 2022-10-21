/*
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let student = [
  {
    name: 'Filipe',
    n1: 8.5,
    n2: 9
  },
  {
    name: 'Ana',
    n1: 9,
    n2: 10
  },
  {
    name: 'Gustavo',
    n1: 5,
    n2: 7.5
  },
  {
    name: 'Rafaela',
    n1: 7.5,
    n2: 9
  },
  {
    name: 'Simone',
    n1: 5,
    n2: 6
  }
]

function calculateMedia(n1, n2) {
  return ((n1 + n2) / 2).toFixed(1)
}

for (let sequence of student) {
  if (calculateMedia(sequence.n1, sequence.n2) >= 7) {
    alert(
      `A média do(a) aluno(a), ${sequence.name} é: ${calculateMedia(
        sequence.n1,
        sequence.n2
      )}! Você foi aprovado(a) no consurso!`
    )
  } else {
    alert(`A média do aluno(a) ${sequence.name} é: ${calculateMedia(
      sequence.n1,
      sequence.n2
    )} ! Não foi dessa vez ${sequence.name}, Tente novamente!
 `)
  }
}
