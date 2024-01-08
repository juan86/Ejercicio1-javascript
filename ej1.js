/**
 * Calcula el punto de equilibrio dados los costos fijos, precio de venta y costos variables.
 * @param {number} costoFijo - El costo fijo asociado al producto o servicio.
 * @param {number} precioVenta - El precio de venta del producto o servicio.
 * @param {number} costoVariable - El costo variable asociado al producto o servicio.
 * @returns {number} El punto de equilibrio calculado. Si el cálculo no es posible, devuelve NaN indicando un posible error en los datos.
 */
function puntoDeEquilibrio(costoFijo, precioVenta, costoVariable) {
    const diferenciaCosto = precioVenta - costoVariable;
    return (diferenciaCosto != 0) ? costoFijo / diferenciaCosto : NaN; 
}

function calcularPuntoDeEquilobrio(costoFijo, precioVenta, costoVariable) {
    // Verificar si los datos ingresados son números válidos
    if (isNaN(costoFijo) || isNaN(precioVenta) || isNaN(costoVariable)) {
        console.log("Por favor, ingrese números válidos.");
        return;
    }
    const calculoPuntoEquilibrio = puntoDeEquilibrio(costoFijo, precioVenta, costoVariable);
    // Mostrar el resultado al usuario
    if (!isNaN(calculoPuntoEquilibrio)) {
        console.log(`El punto de equilibrio es: ${calculoPuntoEquilibrio}`);
    } else {
        console.log("No se pudo calcular el punto de equilibrio. Verifique los datos ingresados.");
    }
}

const costoFijo = 1000; // Ejemplo de costo fijo
const precioVenta = 1500; // Ejemplo de precio de venta
const costoVariable = 500; // Ejemplo de costo variable

calcularPuntoDeEquilobrio(costoFijo, precioVenta, costoVariable);