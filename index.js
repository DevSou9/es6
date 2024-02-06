let alunos = [{ nome: 'Juca', nota: 9 },
{ nome: "Pedro", nota: 8 },
{ nome: "Fabiana", nota: 7 },
{ nome: "Gilmar", nota: 5 },
{ nome: "Luzia", nota: 6 },
{ nome: "Karin", nota: 10 },
{ nome: "Eliomar", nota: 7 },
{ nome: "Melissa", nota: 8 },
{ nome: "Jéssica", nota: 5 },
]

let alunosAprovados = alunos.filter((item) => {
    return item.nota > 6;
})
alunosAprovados.forEach((item) => {
    console.log(`Aluno aprovado: ${item.nome} - ${item.nota}`);
})

