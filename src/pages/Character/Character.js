import { Card } from '../../Components/Card/Card';
import { Search } from '../../Components/Search/Search';
import { Filter } from '../../Components/Filter/Filter';
import { useEffect, useState } from 'react';
import { Pagination } from '../../Components/Pagination/Pagination';

export const Character = () => {
	const [activePage, setActivePage] = useState(1);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState([]);
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const [species, speciesData] = useState('');
	console.log(species);
	const { info, results } = data;
	const api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	useEffect(() => {
		(async () => {
			const data = await fetch(api).then((res) => res.json());
			setData(data);
		})();
	}, [api]);

	return (
		<div style={{ backgroundColor: '#202329', paddingTop: '20px' }}>
			<Search setSearch={setSearch} setActivePage={setActivePage} />
			<Filter
				setStatus={setStatus}
				setGender={setGender}
				speciesData={speciesData}
			/>
			<h1 className="text-center display-1 text-white py-5">
				Rick and Morphy
			</h1>
			{results?.length ? (
				<ul className="d-flex flex-wrap justify-content-center">
					{results.map((item) => (
						<Card
							id={item?.id}
							key={item?.id}
							image={item?.image}
							name={item?.name}
							species={item?.species}
							known={item.location?.name}
							seen={item.origin?.name}
							titleBottom={item?.status}
						/>
					))}
				</ul>
			) : (
				<h3>Character not found</h3>
			)}
			<Pagination
				setActivePage={setActivePage}
				pageCount={info?.pages}
				activePage={activePage}
			/>
		</div>
	);
};
