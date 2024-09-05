function promNotas() {
    var num1 = document.getElementById("txtNumero1");
    var num2 = document.getElementById("txtNumero2");
    var num3 = document.getElementById("txtNumero3");
    //Proceso
    var sumar = parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value);
    var total = sumar /= 3;
    //Salida
    document.getElementById("txtResultado").value = total.toFixed(2);
}// JavaScript source code
