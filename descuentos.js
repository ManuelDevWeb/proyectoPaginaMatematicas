function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecio = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecio) / 100;

    return precioConDescuento;
}

//Conectando HTML
function calcularPrecioDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("inputDescuento");
    const valueDescuento = inputDescuento.value;

    const parrafo = document.getElementById("resultadoPrecio");

    const precio = calcularPrecioConDescuento(valuePrecio, valueDescuento);

    parrafo.innerText = "El precio con descuento es: " + precio;

}