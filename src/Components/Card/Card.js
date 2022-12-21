import { Item } from '../Item/Item';

export const Card = ({
	id,
	image,
	name,
	species,
	titleBottom,
	known,
	seen,
}) => {
	return (
		<Item
			id={id}
			image={image}
			title={name}
			species={species}
			titleBottom={titleBottom}
			known={known}
			seen={seen}
		/>
	);
};
