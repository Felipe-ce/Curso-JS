function contar() {
  //pegar valores do input
  let ini = document.querySelector('#txti')
  let fim = document.querySelector('#txtf')
  let passo = document.querySelector('#passo')
  
  //pegando a div res
  let res = document.querySelector('.res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `<p>[ERRO!] Verifique os dados</p>`
  } else {
    res.innerHTML = `Contando: ...`
    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(passo.value)
    console.log(i, f ,p)

    for(let c = i; c <= f; c +=p){
      res.innerHTML += `${c}`
    }

  }
}