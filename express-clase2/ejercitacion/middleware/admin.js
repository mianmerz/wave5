/**
En este archivo vamos a implementar diferentes funcionalidades
en este caso, usamos "user" para crear un objeto con información de usuarios
y "auth" para mostrar un mensaje determinado. Éstas funciones middleware
las utilizamos en "/routes/products.js"

que es res.locals? : https://www.geeksforgeeks.org/express-js-res-locals-property/
*/
/**
 * Esta funcion deberia guardar en res.locals.user un objeto con atributos id,name,admin recibidos por body 
 */

function user(req, res, next) {
	if (req.body) {
		let { id, name, admin } = req.body;

		res.locals.user = { id, name, admin }
	}

	next();
};

/**
 * Retorna string si el usuario tiene rol administrador:
 * "El usuario xxx, es admin"
 */
function auth(req, res, next) {
	if (req.body) {
		let { name, admin } = req.body;

		if (admin) res.send(`El usuario ${name}, es admin`);
		else res.status(300).send("Error Auth");
	}
	
	next();
};

module.exports = { user, auth }