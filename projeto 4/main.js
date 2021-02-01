function gerarTabuada() {
  let txtNum = document.querySelector('#txtn')
  let tab = document.querySelector('#seltab')

  if (txtNum.value.length == 0) {
    window.alert(`Por favor, digite um numero!`);
  } else {
    let n =Number(txtNum.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} * ${c} = ${n*c}`
      tab.appendChild(item)
      c++
    }

  }
} 