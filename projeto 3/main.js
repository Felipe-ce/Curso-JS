function contar() {
  //pegar valores do input
  let inicio = document.querySelector('#inicio')
  let fim = document.querySelector('#fim')
  let passo = document.querySelector('#passo')
  
  //pegando a div res
  res = document.querySelector('.res')

  console.log(inicio.typeof, fim.length, passo.length)


  //Validação dos input
  /*
  if (inicio.length == 0 || fim.length == 0 || passo == 0) {
    res.innerHTML = `<p>[ERRO] verifique os dados</p>`;
  } else {
    res.innerHTML = `<p>[ERRO] teste</p>`;
  }
*/
}