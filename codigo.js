
 var area = window.document.getElementById('area');
 area.addEventListener("click", clicar);
 area.addEventListener("mouseover", entrar);
 area.addEventListener("mouseout", sair);
 
function clicar() {
    area.innerText = "Clicou";
    area.style.background = "green";
  }
  
  function entrar() {
    area.innerText = "Entrou";
    area.style.background = "blue";
  }
  
  function sair() {
    area.innerText = "Saiu";
    area.style.background = "red";
  }
  
 
  