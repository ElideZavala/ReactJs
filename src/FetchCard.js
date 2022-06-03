import React, { useState, useEffect, useCallback } from 'react';
import getPosts from './helpers/getPosts';
import getUser from './helpers/getUser';

// const initialUser = {
// 	name: "",
// 	email: ""
// }

// const initialPosts = [
// 	{ id: 1, title: "Post 1"},
// 	{ id: 2, title: "Post 2"},
// ]

const FetchCard = () => {
	const [ user, setUser ] = useState({})
	const [ posts, setPosts  ] = useState([])
	
	const updateUser = () => {
		getUser()
			.then((newUser) => {
				setUser(newUser);  // ==> Lo datos que obtendremos lo llevaremos a esta funcion. 
			})
	}

	const updatePosts = useCallback(() => { 
		getPosts(user.id)
			.then((newPosts) => {
				setPosts(newPosts)
			})
	}, [user.id]) // Lo actualizae cuando cambie el id
	
	useEffect(() => {
		updateUser();
	}, [])

	useEffect(() => {
		if (user?.id) {
			updatePosts();
		}
		// Cada que exista un cambi en user se ejecutara esta funcion.
	}, [user], updatePosts)

  return (
	  <div>
		  <button onClick={updateUser}>
			  Another User
		  </button>
		  <h1>{user.name}</h1>
		  <h2>{user.email}</h2>
		  <br/>

		  <h2>Posts - user: {user.id}</h2>
		  <ul>
			  {posts.map(post => (
				  <li key={post.id}>{post.name}</li>
			  ))}
		  </ul>
	  </div>
  )
}

export default FetchCard