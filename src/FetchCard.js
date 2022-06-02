import React, { useState, useEffect } from 'react';
import getUser from './helpers/getUser';

const initialUser = {
	name: "",
	email: ""
}

const FetchCard = () => {
	const [user, setUser] = useState(initialUser)
	
	const updateUser = () => {
		getUser()
			.then((newUser) => {
				setUser(newUser)  // ==> Lo datos que obtendremos lo llevaremos a esta funcion. 
			})
	}

	useEffect(() => {
		updateUser();
	},[])

  return (
	  <div>
		  <h1>{user.name}</h1>
		  <h2>{user.email}</h2>
	  </div>
  )
}

export default FetchCard