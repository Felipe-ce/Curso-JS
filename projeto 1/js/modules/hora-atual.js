export default function initHoraAtual() {
  const msg = document.querySelector('#msg')
  const img = document.querySelector('#img')
  const data = new Date()
  const horaAtual = data.getHours()
  const minutos = data.getMinutes()


  msg.innerHTML = `<p>Ágora são: ${horaAtual}:${minutos} min</p>`
  if (horaAtual >= 0 && horaAtual < 12) {
    //Bom dia 
    img.src = 'img/manha.png'
    document.body.style.backgroundColor = "#B3DEFA"
  } else if (horaAtual >= 12 && horaAtual < 18){
    //boa tarde
    img.src = 'img/tarde.png'
    document.body.style.backgroundColor = '#6C85A4'
  } else {
    //boa noite
    img.src = 'img/noite.png'
    document.body.style.backgroundColor = '#524068'
  }
}

// function carregar() {
//   let msg = document.querySelector('#msg')
//   let img = document.querySelector('#img')
//   let data = new Date()
//   let horaAtual = data.getHours()
//   let minutoAtual = data.getMinutes()

//   msg.innerHTML = `<p>agora São: ${horaAtual}:${minutoAtual} min</p>`

//   if (horaAtual >= 0 && horaAtual < 12) {
//     //Bom dia
//     img.src = 'img/manha.png'
//     document.body.style.background = '#B3DEFA'
//   } else if (horaAtual > 12 && horaAtual < 18){
//     //Boa tarde
//     img.src = 'img/tarde.png'
//     document.body.style.background = '#6C85A4'
//   }else{
//     //boa noite
//     img.src = 'img/noite.png'
//     document.body.style.background = '#524068'
//   }
// }