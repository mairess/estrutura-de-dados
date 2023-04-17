const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (inde) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Prost

// acessar o tamnaho do array
console.log(pilotos.length)

//iterável
for (let piloto of pilotos){
    console.log(piloto)
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontra um elemento
const senna =  pilotos.find(piloto => piloto === 'Senna')
console.log("senna")

// deletar elemento
pilotos.splice(1, 1)
console.log(pilotos)