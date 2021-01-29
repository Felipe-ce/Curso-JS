function contar() {
  //pegar valores do input
  let ini = document.querySelector('#txti')
  let fim = document.querySelector('#txtf')
  let passo = document.querySelector('#txtp')
  
  //pegando a div res
  let res = document.querySelector('.res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `<p>[ERRO!] Verifique os dados</p>`
  } else {
    res.innerHTML = `<p>Contando:</p>`
    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(passo.value)
    if (p <= 0) {
      res.innerHTML = `<p>Passo tem que ser maior que zero, considerando PASSO = 1:</p>`
      p = 1;
    }

    if (i < f) {
      //Contagem crescente
      for(let c = i; c <= f; c += p){
        res.innerHTML += `<span>${c}</span>, `
      }
    } else {
      //Contagem crescente
      for(let c = i; c >= f; c -= p){
        res.innerHTML += `<span>${c}</span>, `
      }
    }
  }
}