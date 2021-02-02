
  //pegar valor do input
  let num = document.querySelector('#txtn')
  let lista = document.querySelector('#flista')
  let res = document.querySelector('.res')
  let valores = []


// verificar se esta dentro da faixa de numero
  function isNumero(n) { 
    if (Number(n) >= 1 && Number(n) <= 100) {
      return true
    } else {
      return false
    }
  }
// verificar se esta na lista
  function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
      return true
    } else {
      return false
    }
  }

  function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
      numeroAdd = Number(num.value)

      //adiciona o valor no array
      valores.push(numeroAdd)

      //adiciona o valor na lista (tela)
      let item = document.createElement('option')
      item.text = `Valor ${numeroAdd} adicionado`
      lista.appendChild(item)
      res.innerHTML = ''

    } else {
      window.alert('Valor invalido ou enconstrado na lista')
    }
    //limpar o input
    num.value = ''
    //voltar para o input
    num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Insira um valor para começar')

  } else {
    let totalnumeors = valores.length

    //verifiacr valores
    let vMaior = valores[0]
    let vMenor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]

      if (valores[pos] > vMaior) {
        vMaior = valores[pos]
      }
      if (valores[pos] < vMenor) {
        vMenor = valores[pos]
      }
    }
    media = soma / totalnumeors

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todos temos ${totalnumeors} numeros</p>`
    res.innerHTML += `<p>O Maior valor é: ${vMaior}</p>`
    res.innerHTML += `<p>O Menor valor é: ${vMenor}</p>`
    res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
    res.innerHTML += `<p>A media dos valores é: ${media}</p>`


  }
}