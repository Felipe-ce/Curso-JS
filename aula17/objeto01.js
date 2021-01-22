let amigo = {
    nome: 'Davi',
    peso: 90,
    idade: 26,
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`o ${amigo.nome} pesa ${amigo.peso}`)