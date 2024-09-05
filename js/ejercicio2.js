// JavaScript source code
//array de objetos
var telefonos = [
    { marca: "Nothing", modelo: "Phone 2" },
    { marca: "Samsumg", modelo: "Galaxy S24" },
    { marca: "Motorola", modelo: "G84" },
    { marca: "Redmi", modelo: "Note 13" },
    { marca: "Poco", modelo: "X6 Pro" },
    { marca: "Realme", modelo: "GT 6" },
    { marca: "Nubia", modelo: "Red Magic 8 Pro" },
    { marca: "Apple", modelo: "Iphone 14" },
    { marca: "Motorola", modelo: "Edge 30 Ultra" },
    { marca: "Oneplus", modelo: "Nord 4" }
];

for (var i = 0; i < telefonos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + telefonos[i].marca + "</td>";
    html += "       <td>" + telefonos[i].modelo + "</td>";
    html += "</tr>";

    document.getElementById("tbodyTelefonos").innerHTML += html;
}// JavaScript source code
