import Pokecard from './Pokecard.js';

const Pokedex = props => {
	Pokedex.defaultProps = [
		{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
	];
	return (
		<div>
			{props.items.map(prop => (
				<Pokecard
					id={prop.id}
					name={prop.name}
					type={prop.type}
					base_experience={prop.base_experience}
				></Pokecard>
			))}
		</div>
	);
};

export default Pokedex;
