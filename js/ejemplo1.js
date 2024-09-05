// JavaScript source code
//Arrays
var frutas = ["Manzana", "Uva", "Pera", "Banano", "Fresa", "Kiwi", "Mandarina", "Naranja", "Mango"];


for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";

}

//object
var persona = { nombre: "Erick", telefono: "12345678" };

//lista de objetos
var contactos = [
    { nombre: "Erick", telefono: "12345678" },
    { nombre: "Carmen", telefono: "87654321" },
    { nombre: "Leomar", telefono: "23842839" },
    { nombre: "Marcela", telefono: "38459283" },
    { nombre: "Sebastian", telefono: "37591827" },
];

for (var i = 0; i < contactos.length; i++) {
    document.getElementById("listaContactos").innerHTML += "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    console.log(contactos[i]);
}