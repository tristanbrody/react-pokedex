import './Pokecard.css';

const Pokecard = ({ name, id, type, base_experience }) => {
	const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	return (
		<div className="Pokecard">
			<h5 className="Pokecard-name">{name}</h5>
			<img src={image} alt="Image of {name}" className="Pokecard-image"></img>
			<div className="Pokecard-additional-data">Type: {type}</div>
			<div className="Pokecard-additional-data">EXP: {base_experience}</div>
		</div>
	);
};

export default Pokecard;
