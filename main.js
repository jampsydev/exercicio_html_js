function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (isNaN(campoA) || isNaN(campoB)) {
      alert("Por favor, insira valores numéricos em ambos os campos.");
      return false;
    }

    if (campoB <= campoA) {
      alert("infelizmente a sua média é menor que a média 2.");
      return false;
    } 
    else {
        alert("Parabéns a sua média é maior que a média 1. ");

    }

    
    return true;
  }