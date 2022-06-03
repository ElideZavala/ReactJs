import { useState, useEffect } from 'react'

const RisizeApp = () => {
	// Ancho actual de la pantalla.
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Mostar en la pantalla con resoluciones menores a 768px.
	const isMobile = windowWidth < 768;

	useEffect(() => {
		// Evento de cambio de tamaño de la pantalla. cambiara cada que cambie el ancho de la pantalla. 
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		
		// Enviar en calquiera de los defectos. 
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	},[]);

  return (
	 	<div>
			 <h1>{windowWidth}</h1>
			 {/* Si es true mostrara el texto */}
			 {isMobile && <h2>Show only mobile device</h2>}
		</div>
	)
}

export default RisizeApp