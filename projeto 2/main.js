function verificar() {
  //Pegando os valores
  let res = document.querySelector('#res')
  let anoAtual = new Date().getFullYear()
  let anoNascimento = Number(document.querySelector('#txtano').value)
  //let sexo = document.querySelector('#')

  //verificar se o ano é valido
  if (anoNascimento == 0 || anoNascimento > anoAtual) {
    res.innerHTML = `<p>Verifique o ano de nascimento</p>`
  }
}