import { NavLink } from 'react-router-dom';

export const Item = ({
	image,
	title,
	species,
	titleBottom,
	known,
	seen,
	id,
}) => {
	console.log(id);
	return (
		<li
			className="d-flex rounded-4"
			style={{
				width: '600px',
				marginRight: '20px',
				marginBottom: '20px',
				backgroundColor: '#3C3E44',
			}}
		>
			<img
				className="rounded-4"
				src={image}
				width={288}
				height={278}
				alt={'Hello'}
			/>
			<div className="p-3 text-white d-block ">
				<h3 className="h2 text-info">{title}</h3>
				<p className="d-flex fw-bold fs-4">
					{titleBottom} - <p> {species}</p>
				</p>

				<div>
					<span className="text-info">Last known location: </span>
					<p className="fw-bold fs-4">{known}</p>
				</div>

				<div>
					<span className="text-info">First seen in</span>
					<p className="fw-bold fs-4">{seen}</p>
				</div>
				<NavLink to={`/single/${id}`} className="btn btn-success">
					More
				</NavLink>
			</div>
		</li>
	);
};
