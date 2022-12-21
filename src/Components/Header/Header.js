import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<div className="d-flex justify-content-between align-items-center container py-3 fs-4">
			<a className="text-decoration-none text-dark" href="/">
				Logo
			</a>
			<ul className="list-unstyled d-flex m-0 gap-4">
				<li>
					<NavLink
						className="text-decoration-none text-dark"
						to={'/'}
					>
						Character
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-decoration-none text-dark"
						to={'/location'}
					>
						Location
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-decoration-none text-dark"
						to={'/episode'}
					>
						Episode
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
