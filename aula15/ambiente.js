let notas = [5, 6, 3, 5]
notas.push(1)

for (const i in notas) {
    console.log(`Aposição: ${i} tem o valor ${notas[i]}`)
}

console.log(notas.indexOf(3))
