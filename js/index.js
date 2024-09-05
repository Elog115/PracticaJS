// JavaScript source code
function suma() {
    var num1 = document.getElementById("txtNumero1");
    var num2 = document.getElementById("txtNumero2");
    var total = parseFloat(num1.value) + parseFloat(num2.value);

    document.getElementById("txtResultado").value = total;
}
