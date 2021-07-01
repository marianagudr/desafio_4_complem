let producto1 = parseInt(prompt("Ingresá el precio del Producto 1"));
let producto2 = parseInt(prompt("Ingresá el precio del Producto 2"));
let iva = parseInt(prompt("Ingresá el porcentaje correspondiente al IVA"));

let precioTotal = (producto1,producto2) => producto1 + producto2;

console.log("El precio total de tus productos sin IVA es $" + precioTotal(producto1,producto2));

function precioFinal(precioTotal,iva) {
    return precioTotal + (precioTotal * iva / 100);
}

console.log("El precio final de tus productos con IVA es $" + precioFinal(precioTotal(producto1,producto2),iva));
console.log("Gracias por tu compra");
