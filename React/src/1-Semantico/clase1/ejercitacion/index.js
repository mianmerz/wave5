const React = require('react')

/************************************************************* 
EJERCICIO 
1-Crear:
- Una cabecera
- Un menú de navegación 
- Un contenido principal

2-Dentro del contenido principal crear:
- Una sección
- Un artículo
- Una figura - Incluir aquí una imagen tuya que funcione como hipervínculo a tu perfil de Linkedin.
- Descripción de la imagen ( Podríamos poner nuestro nombre )
3-Fuera del contenido principal: 
- Pie de página donde tengamos un párrafo.
 ************************************************************/
// Tu código acá

function Home() {
	return (
		<>
			<nav className='menu' role="navigation" >
				<a href="#">Inicio</a>
				<a href="#">Perfil</a>
				<a href="#">Bla</a>
			</nav>

			<main role="main">
				<section className="profile" role="section">
					<header className="">
						<h1>Miguel Merelli</h1>
					</header>

					<article >
						<div className="top">
							<figure className="avatar">
								<a target="_blank" href="https://www.linkedin.com/in/miguel-merelli-6931a6106/">
									<img src="https://images.sk-static.com/images/media/profile_images/artists/244669/huge_avatar" alt="Miguel Merelli" />
								</a>
							</figure>
						</div>

						<div className="bottom">
							<p className="description">
								Joel Thomas Zimmerman, nacido el 5 de enero de 1981, más conocido como Deadmau5, es un DJ y productor
								canadiense principalmente de house. Sus canciones se han incluido en álbumes recopilatorios como In search of sunrise
								Ibiza y en el programa radial de Armin van Buuren A state of trance. Su álbum debut, Get scraped, se publicó en 2005, y
								fue sucedido por otros en los años posteriores.
							</p>
						</div>
					</article>


				</section>
			</main>

			<footer>
				<a href='https://github.com/mianmerz' target="_blanck">
					Github </a>
			</footer>

		</>
	);
}

export default Home
