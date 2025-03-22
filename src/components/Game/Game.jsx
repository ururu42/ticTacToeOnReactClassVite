import PropTypes from 'prop-types';
// import { Information } from './Information/Information';
// import { Field } from './Field/Field';
import { OldField } from './Field/OldField';
import { OldInformation } from './Information/InformationOld';

export const Game = () => {
	return (
		<>
			{/* <Information></Information> */}
			{/* <Field /> */}
			<OldInformation />
			<OldField />
		</>
	);
};

Game.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
};
