import PropTypes from 'prop-types';
import { Information } from './Information/Information';
import { Field } from './Field/Field';

export const Game = () => {
	return (
		<>
			<Information></Information>
			<Field />
		</>
	);
};

Game.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
};
