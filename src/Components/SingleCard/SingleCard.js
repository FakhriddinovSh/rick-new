// import { NavLink, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// export const SingleCard = () => {
// 	const { id } = useParams();
// 	console.log(id);

// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		fetch(`https://rickandmortyapi.com/api/character/${id}`)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setData(data);
// 			});
// 	}, [id]);

// 	return <div>SingleCard {console.log(data)}</div>;
// };
