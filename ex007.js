function somar(){
    var tn1 = parseInt (window.document.getElementById('txtn1').value)
    var tn2 = parseInt (window.document.querySelector('input#txtn2').value)

    var resultado = tn1 + tn2
   

    var res1 = window.document.getElementById("res")
    res1.style.color = "green"

    res1.innerHTML = `A soma entre <span style = "color: red">${tn1}</span> e <span style = "color: blue">${tn2}</span> é igual a 
    <strong><span style = "color: yellow">${resultado}</span></strong>`


}