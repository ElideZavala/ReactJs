import React, { useState, useEffect } from 'react';

const Lifecycle = () => {
	console.log('Login-render')

	const [counter1, setcounter1] = useState(0);
	const [counter2, setcounter2] = useState(0);
	

	// UseEffec es una funcion que se ejecuta cuando el componente se renderiza

	useEffect(() => {
		// S ejecutara la primera que carge el componente y cambie el estado que cambie no se ejecutara la funcion. 
		// Solo se ejecuta en una ocacion
		console.log('useEffect []'); 
		return () => {
			console.log('cleanup useEffect []')
		}
	}, [])

	useEffect(() => {
		// Se ejecutara cada que se ejecute una fución
		console.log('useEffect no dependency'); 
		return () => {
			console.log('cleanup useEffect no dependect')
		}
	})

	useEffect(() => {
		// Se ejecutara normalmene en la primera carga del componente y se ejecutara nuevamente 
		// cada que alla un cambio de counter1, en esa dependencia.  
		console.log(counter1); 

		return () => {
			console.log('cleanup useEffect [counter 1]')
		}
	}, [counter1])

	
	useEffect(() => {
		console.log(counter2)

		return () => {
			console.log('cleanup useEffect [counter 2]')
		}
	 }, [counter2])
	 	
	useEffect(() => {
		console.log('useEffect [counter1, counter2]')

		return () => {
			console.log('cleanup useEffect [counter 1, counter 2]')
		}
	}, [counter1, counter2])

  return (
		<div>
			{console.log('ruturn-render')}
			<h1>Click c1: {counter1}</h1>
			<h1>Click c1: {counter2}</h1>
			<button onClick={() => setcounter1(counter1 + 1)}>
				increment c1
			</button>
			<button onClick={() => setcounter2(counter2 + 2)}>
				increment c2
			</button>``
		</div>
  )
}

export default Lifecycle