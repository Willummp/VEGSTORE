

window.addEventListener('scroll', function() {
  var minhaDiv = document.querySelector('.navbar_itens');
  var funcionamento = document.getElementById('navbar_text');
  
  if (window.scrollY > 150) {
    minhaDiv.style.top = '2rem';
    funcionamento.style.display = "none";
  } else {
    minhaDiv.style.top = '5rem';
    funcionamento.style.display = "block";
  }
});