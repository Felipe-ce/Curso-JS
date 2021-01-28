function verificar() {
  //Pegando os valores
  let res = document.querySelector('#res');
  let anoAtual = new Date().getFullYear();
  let anoNascimento = Number(document.querySelector('#txtano').value);
  let sexo = Number(document.querySelector('input[name="radsex"]:checked').value);
  genero = '';
  let img = document.createElement('img');
  img.setAttribute('id', 'foto');


  //Calcular idade
  let idade =  anoAtual - anoNascimento;

  if (anoNascimento == 0 || anoNascimento > anoAtual) {
    res.innerHTML = `<p>[ERRO!] Verifique o ano de nascimento</p>`
  } else {
    if (sexo == 1) {
      genero = 'Masculino'
      if (idade >= 0 && idade < 10) { 
        //criança
        img.setAttribute('src', 'img/crianca-homem.jpg')
      } else if (idade < 18){
        //jovem
        img.setAttribute('src', 'img/jovem-homem.jpg')
      } else if(idade < 50) {
        //adulto
        img.setAttribute('src', 'img/adulto-homem.jpg')
      }else{
        //idoso
        img.setAttribute('src', 'img/idoso-homem.jpg')
      }
    } else if (sexo == 2){
        genero = 'Feminino'
        if (idade >= 0 && idade < 10) { 
          img.setAttribute('src', 'img/crianca-mulher.jpg')
          //criança
        } else if (idade < 18){
          img.setAttribute('src', 'img/jovem-mulher.jpg')
          //jovem
        } else if(idade < 50) {
          //adulta
          img.setAttribute('src','img/adulta-mulher.jpg')
        }else{
          //idosa
          img.setAttribute('src', 'img/idosa-mulher.jpg')
        }
      }
      res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos</p>`;
      res.appendChild(img);
    }

}



  //verificar se o ano é valido
  /*
  if (anoNascimento == 0 || anoNascimento > anoAtual) {
    res.innerHTML = `<p>[ERRO]Verifique o ano de nascimento</p>`
  }else if (idade <= 12 && sexo == 1) { //verificar faixa etaria
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é uma criança masculina de ${idade} anos</h3>
    <img src="img/crianca-homem.jpg" alt="crianca-homem">
    `
  } else if (idade <= 12 && sexo == 2){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é uma criança feminina de ${idade} anos</h3>
    <img src="img/crianca-mulher.jpg" alt="crianca-homem">
    `
  }else if (idade < 18 && sexo == 1){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é um jovem masculino de ${idade} anos</h3>
    <img src="img/jovem-homem.jpg" alt="jovem-homem">
    `
  }else if (idade < 18 && sexo == 2){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é uma jovem feminina de ${idade} anos</h3>
    <img src="img/jovem-mulher.jpg" alt="jovem-mulher">
    `
  }else if (idade < 48 && sexo == 1){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é um Adulto masculino de ${idade} anos</h3>
    <img src="img/adulto-homem.jpg" alt="adulto-homem">
    `
  }else if (idade < 48 && sexo == 2){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é uma Adulta feminina de ${idade} anos</h3>
    <img src="img/adulta-mulher.jpg" alt="adulto-mulher">
    `
  }else if (idade > 48 && sexo == 1){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é um idoso masculino de ${idade} anos</h3>
    <img src="img/idoso-homem.jpg" alt="idoso-homem">
    `
  }else if (idade > 48 && sexo == 2){
    res.innerHTML = `
    <div class='teste'> 
    <h3>Olá, é uma idoso masculino de ${idade} anos</h3>
    <img src="img/idoso-mulher.jpg" alt="idoso-mulher">
    `
  }*/