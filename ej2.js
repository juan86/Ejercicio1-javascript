// Definición de la función calcularPresupuesto que recibe el ingreso total y calcula los montos para gastos necesarios, gastos opcionales y ahorro e inversión.
function calcularPresupuesto(ingresoTotal) {
    // Calcula los montos para cada categoría basándose en el porcentaje del ingreso total.
    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroEInversion = ingresoTotal * 0.2;

    // Devuelve un objeto con los montos calculados para cada categoría.
    return {
        gastosNecesarios,
        gastosOpcionales,
        ahorroEInversion
    };
}

// Definición de la función mostrarPresupuesto que muestra en consola los montos calculados para cada categoría del presupuesto.
function mostrarPresupuesto(ingresoTotal) {
    // Verifica si el ingreso total es un número válido y mayor que cero.
    if (isNaN(ingresoTotal) || ingresoTotal <= 0) {
        console.log("Por favor, ingrese un valor válido para el ingreso total.");
        return;
    }

    // Calcula el presupuesto utilizando la función calcularPresupuesto.
    const presupuesto = calcularPresupuesto(ingresoTotal);

    // Muestra en consola los montos calculados para cada categoría.
    console.log(`Presupuesto basado en el modelo 50-30-20 para un ingreso total de $${ingresoTotal}:`);
    console.log(`- Gastos necesarios: $${presupuesto.gastosNecesarios}`);
    console.log(`- Gastos opcionales: $${presupuesto.gastosOpcionales}`);
    console.log(`- Ahorro e inversión: $${presupuesto.ahorroEInversion}`);
}

// Llama a la función mostrarPresupuesto con un ejemplo de ingreso total de 1000.
mostrarPresupuesto(1000);
