export default function verificarIdade() {
  const buton = document.querySelector('#buton')
  buton.addEventListener('click', function () {
    
  
  //pegar dados
  const res = document.querySelector('#res') 
  const anoAtual = new Date().getFullYear()
  const anoNascimento = Number(document.querySelector('#txtano').value)
  const sexo = Number(document.querySelector('input[name="radsex"]:checked').value)
  
  let genero = ''
  let img = document.createElement('img')
  img.setAttribute('id', 'foto')

  // Calcular idade
  const idade = anoAtual - anoNascimento


  if (anoNascimento <= 0 || anoNascimento > anoAtual) {
    res.innerHTML = `<p>[ERRO!] Verifique o ano de nascimento</p>`
  } else {
    if (sexo === 1) {
      genero = 'masculino'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'img/crianca-homem.jpg')
      }else if (idade < 18){
        img.setAttribute('src', 'img/jovem-homem.jpg')
      }else if(idade < 59){
        img.setAttribute('src', 'img/adulto-homem.jpg')
      }else{
        img.setAttribute('src', 'img/idoso-homem.jpg')
      }
    } else {
      if (sexo === 2){
      genero = 'Feminino'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'img/crianca-mulher.jpg')
      }else if (idade < 18){
        img.setAttribute('src', 'img/jovem-mulher.jpg')
      }else if(idade < 59){
        img.setAttribute('src', 'img/adulta-mulher.jpg')
      }else{
        img.setAttribute('src', 'img/idosa-mulher.jpg')
      }
    }
  }
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
  }
})
}

