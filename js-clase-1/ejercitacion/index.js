/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
let calculatePrice = (name, price) => {
	// validaciones
	if(price == undefined || name == undefined) return "ingresar ambos parámetros"; 
	if (price  <= 0) return "Error";

	if(typeof name != "string") return "ingresar un nombre válido";

	// calculo de envío
	let envio = 0;
	if (price > 1 && price <= 2000) envio = 300;
	if (price > 2000 && price <= 4000) envio = 500;
	if (price > 4000) envio = 700;

	let total = price + envio;

	return `El costo de envio de una ${name} es de $${price} pesos y el precio total seria de $${total} pesos. Costo de envío $${envio}`;
}



module.exports = {
	calculatePrice,
};
