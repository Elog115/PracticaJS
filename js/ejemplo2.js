// JavaScript source code
//array de objetos
var contactos = [
    { nombre: "Luis", telefono: "8765-4321" },
    { nombre: "Carmen", telefono: "1234-4321" },
    { nombre: "Osvaldo", telefono: "1234-1233" },
    { nombre: "Javier", telefono: "1231-7438" },
    { nombre: "Eduardo", telefono: "9372-1452" },
    { nombre: "Jose", telefono: "1894-0007" },
    { nombre: "Maria", telefono: "4829-4826" },
    { nombre: "Paola", telefono: "7491-7560" },
    { nombre: "Ursula", telefono: "5732-9183" },
    { nombre: "Judith", telefono: "7538-2819" }
];

for (var i = 0; i < contactos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + contactos[i].nombre + "</td>";
    html += "       <td>" + contactos[i].telefono + "</td>";
    html +=     "</tr>";

    document.getElementById("tbodyContactos").innerHTML += html;
}