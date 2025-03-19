export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const calculateWinner = (field, symbol) => {
	const playerPositions = field.reduce((acc, fieldElem, index) => {
		if (fieldElem === symbol) {
			acc.push(index);
		}
		return acc;
	}, []);

	const isHaveWinner = WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => playerPositions.includes(index)),
	);
	return isHaveWinner;
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD': {
			const newField = [...state.field];
			newField[payload] = state.currentPlayer;

			const isHaveWinner = calculateWinner(newField, state.currentPlayer);

			// if (state.field[action.payload] !== '') {
			// 	console.log('Это поле уже занято');
			// 	return state;
			// }

			if (isHaveWinner) {
				return {
					...state,
					field: newField,
					currentPlayer: state.currentPlayer,
					isDraw: false,
					isGameEnded: true,
				};
			} else if (!newField.includes('')) {
				return {
					...state,
					field: newField,
					isDraw: true,
				};
			} else
				return {
					...state,
					field: newField,
					currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				};
		}
		case 'RESTART_GAME':
			console.log('initialState', initialState);
			return initialState;

		default:
			return state;
	}
};

console.log(reducer);
console.log('initialState', initialState);
