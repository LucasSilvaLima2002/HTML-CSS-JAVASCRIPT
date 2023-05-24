function calcular() {
    var velocidade = parseInt(document.getElementById("txtvel").value);
    var resultado = document.getElementById("res");
    resultado.innerHTML = "<p>Sua velocidade é de <strong>" + velocidade + "</strong></p>";

    if (velocidade > 30) {
      resultado.innerHTML += "<p>Sua velocidade ultrapassou o limite</p>";
    } else {
      resultado.innerHTML += "<p>Velocidade permitida</p>";
    }

    
  }