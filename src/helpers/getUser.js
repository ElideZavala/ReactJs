const getUser = async () => {
	const userId = Math.random() * 10; // Generar un nuemero alatorio entre 0 y 1.
	console.log(userId);

	const url = 'https://jsonplaceholder.typicode.com/users/1';
	const res = await fetch(url);
	const user = await res.json();

	return user;
}
 
export default getUser;