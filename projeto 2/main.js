function verificar() {
  //Pegando os valores
  let res = document.querySelector('#res')
  let anoAtual = new Date().getFullYear()
  let anoNascimento = Number(document.querySelector('#txtano').value)
  let sexo = document.querySelector('input[name="radsex"]:checked').value


  //verificar se o ano é valido
  if (anoNascimento == 0 || anoNascimento > anoAtual) {
    res.innerHTML = `<p>Verifique o ano de nascimento</p>`
  }

  //Calcular idade
  let idade = anoNascimento - anoAtual

  //verificar faixa etaria
  if (idade <= 12 ) {
    res.innerHTML = `<div class='teste'>  <img src="img/crianca-homem.jpg" alt="crianca-homem">`
  } else {
    
  }
}