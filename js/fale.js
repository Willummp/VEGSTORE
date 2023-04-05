// RADIO BUTTONS

let divR1 = document.getElementById('divR1')
let divR2 = document.getElementById('divR2')
let divR3 = document.getElementById('divR3')

function mSoja() {
  divR1.style.backgroundColor = '#835B3D';
  divR2.style.backgroundColor = '';
  divR3.style.backgroundColor = '';
}function mLeguminosas() {
  divR2.style.backgroundColor = '#835B3D';
  divR3.style.backgroundColor = '';
  divR1.style.backgroundColor = '';
}function mTodos() {
  divR3.style.backgroundColor = '#835B3D';
  divR2.style.backgroundColor = '';
  divR1.style.backgroundColor = '';
}


// option/ dropdown
let opPai = document.getElementById('opcao')
let op1 = document.getElementById('op1')
let op2 = document.getElementById('op2')
let op3 = document.getElementById('op3')
let op4 = document.getElementById('op4')
let op5 = document.getElementById('op5')
function select(el) {
  for (i=0;i<opPai.children.length;i++) {
    opPai.children[i].classList.toggle('hidden')
    opPai.children[i].classList.toggle('select')
  }
  el.classList.toggle('hidden')
  el.classList.toggle('select')
}

//checkbox
const elements = {caixa1: document.getElementById('caixa1'),caixa2: document.getElementById('caixa2'),caixa3: document.getElementById('caixa3'),check1: document.getElementById('check1'),check2: document.getElementById('check2'),
checkPai: document.getElementById('checkPai'),
checkInt: document.getElementById('checkInt')
};

function marcar(el) {
  const { caixa1, caixa2, caixa3 } = elements;

  if (el == caixa1) {
    const isMarked = caixa2.classList.contains('check') || caixa3.classList.contains('check');
    [caixa1, caixa2, caixa3].forEach(elem => elem.classList.toggle('check', !isMarked));
  } else {
    caixa1.classList.add('check');
    el.classList.toggle('check');
  }
  check();
};

function check() {
  const { caixa1, caixa2, caixa3, check1, check2, checkPai, checkInt } = elements;
  const iscaixa2Marked = caixa2.classList.contains('check');
  const iscaixa3Marked = caixa3.classList.contains('check');
  caixa1.classList.toggle('check', iscaixa2Marked && iscaixa3Marked);
  check1.classList.toggle('displayNone', iscaixa2Marked || !iscaixa3Marked);
  check1.classList.toggle('display', iscaixa2Marked && !iscaixa3Marked);
  check2.classList.toggle('displayNone', iscaixa3Marked || !iscaixa2Marked);
  check2.classList.toggle('display', !iscaixa2Marked && iscaixa3Marked);
  checkPai.classList.toggle('displayNone', !(iscaixa2Marked && iscaixa3Marked));
  checkPai.classList.toggle('display', iscaixa2Marked && iscaixa3Marked);
  checkInt.classList.toggle('displayNone', !(!iscaixa2Marked || !iscaixa3Marked));
  checkInt.classList.toggle('display', !(iscaixa2Marked && iscaixa3Marked));
}

//validar 

// Selecionar elementos do DOM

let formNome = document.getElementById('formNome')
let formEmail = document.getElementById('formEmail')
let formTel = document.getElementById('formTel')
let mensagem = document.getElementById('mensagem')

function enviar() {
  event.preventDefault()
  if (!nome()) {
    alert('Preencha o campo "Nome", deve ter nome e sobrenome.')
  } else if (!email()) {
    alert('Preencha o campo "E-mail". Ex: "auauau@auau.com"')
  } else if (!telefone()) {
    alert('O campo TELEFONE deve ter 11 dígitos"')
  } else if (divR1.style.backgroundColor == '' && divR2.style.backgroundColor == '' && divR3.style.backgroundColor == '') {
    alert('Preencha o campo "Qual a sua preferência de carne vegana?"')
    
  } else if (!caixa2.classList.contains('marcado') && !caixa3.classList.contains('marcado') && !caixa1.classList.contains('marcado')) {
    alert('Preencha o campo "Deseja receber contato via?"')
  } else if (mensagem.value.length < 5) {
    alert('A sua mensagem deverá ter ao menos 5 caracteres.')
  } else {
    alert('Obrigado, vamos entrar em contato em breve.')
  }
}

function nome() {
  if (formNome.value.includes(' ') && formNome.value.length > 3) {
    return true
  }
}function email() {
  if (formEmail.value[0] != '@' && formEmail.value.includes('.', formEmail.value.indexOf('@')) && formEmail.value[formEmail.value.indexOf('@') + 1] != '.') {
    return true
  }
}function telefone() {
  if (formTel.value.length == 11) {
    return true
  }
}
