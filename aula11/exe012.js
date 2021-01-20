let data = new Date()
let hora = data.getHours();

console.log(`A hora atual é: ${hora}`)

if (hora < 12) {
  console.log(`Bom dia`)
}else if (hora <= 18){
  console.log(`Boa tarde`)
}else{
  console.log(`Boa noite`)
}