const express = require("express");
const router = express.Router();
let brandsDB = require("../utils/products");
const { user, auth } = require("../middleware/admin");

/*************************************************************
	GET
http://localhost:3000/api/product/Logitech/1
 ************************************************************/

// router.get("/product/:id", (req, res) => {
// 	let products = brandsDB;
// 	res.json(products)
// });


/**
middleware a nivel de rutas:
definimos una ruta, y le podemos pasar diferente middleares,
en este caso utilizamos las dos funciones que definimos en el archivo
"../middleware/admin"

 */
// esto no tiene test
router.get("/user", user, auth, (req, res) => {

})



router.get("/product", (req, res) => {
	console.log("GET - /api/product");

	// let products = brandsDB.reduce((acc, brand) => {
	// 	return acc.concat(brand.products.map(p => {
	// 		return {
	// 			...p, brand: {
	// 				id: brand.id,
	// 				name: brand.name,
	// 				description: brand.description
	// 			}
	// 		}
	// 	}));
	// }, []);



	// console.log("products", products)
	res.json(brandsDB);
});



// Si se encuenta el producto,devuelve un objeto con:
//brand , el nombre de la marca
//description, la descripcion de la marca
//product, el producto entero que corresponde a esa marca
router.get("/product/:brand/:productId?", (req, res) => {
	console.log("GET - /api/product/:brand/:productId");


	const { brand, productId } = req.params;

	let brandDB = brandsDB.find(b => b.name == brand);

	if (!brandDB) return res.status(404).send("Marca no encontrada");

	let product = brandDB.products.find(p => p.id == productId);

	let response = {
		brand: brandDB.name,
		description: brandDB.description,
		product
	};

	res.json(response);
});

/**
POST

http://localhost:3000/api/product
 */
/**
 * El metodo post debe poder agregar un nuevo objeto
 *  con los atributos id,name,description
 * 	al agregarlos, debe responder con un objeto
 *  que contenga los atributos message : "Marca agregada"
 * 	y brand : <nombre de la marca agregada>
 * 	Ej: {message : "Marca agregada",brand: "Iphone"}
 * */

router.post("/product", (req, res) => {
	console.log("POST - /api/product");

	let newProduct = req.body;

	// Validaciones campos requeridos
	if (!newProduct.name) return res.status(400).send("Name required");
	 if (!newProduct.id) return res.status(400).send("Id required");
	 if (!newProduct.description) return res.status(400).send("Description required");

	// Validación existencia
	if (brandsDB.find(b => b.id == newProduct.id || b.name == newProduct.name))
		return res.status(400).send("The brand is already in the system");

	// Alta brand/product
	let newBrand = { ...newProduct, products: [] };

	brandsDB.push(newBrand);

	res.json({ message: "Marca agregada", brand: newBrand.name })
});

/**
	PUT
http://localhost:3000/api/product/2
 */
/**
 * Este método deberia buscar el id pasado por params
 * dentro del array de productos y reemplazar el nombre
 * de la brand por el nombre que llega por body
 */
router.put("/product/:id", (req, res) => {
	console.log("PUT - /api/product/:id");

	let { id } = req.params;
	let { name } = req.body;
	let modified = false;

	// Validación
	if (!name) return res.status(400).send("Name required");


	brandsDB.forEach(brand => {
		if (brand.id == id) {
			brand.name = name;
			modified = true;
		}
	});

	if (modified) res.json({message:"Producto actualizado"});
	else res.json({message:`No se encuentró el producto con id ${id}`});
});


/**
		DELETE
http://localhost:3000/api/product/1
 */


/**
 * Este método debe poder eliminar un producto
 */
router.delete("/product/:id", (req, res) => {
	console.log("DELETE - /api/product/:id");

	let { id } = req.params;
	let product = null;

	brandsDB.forEach((brand, i) => {
		if (brand.id == id) {
			product = brand;
			brandsDB.splice(i, 1);
		}
	});

	if (product) res.json({ message: "Producto Eliminado", product });
	else res.send("No se encontró el producto ")
});




//expressjs.com/es/starter/hello-world.html
module.exports = { router };
