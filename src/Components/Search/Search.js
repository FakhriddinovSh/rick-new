export const Search = ({ setSearch, setActivePage }) => {
	return (
		<input
			onChange={(evt) => {
				setSearch(evt.target.value);
				setActivePage(1);
			}}
			className="form-control w-50 mx-auto rounded-pill"
			type="search"
			placeholder="Search"
		/>
	);
};
