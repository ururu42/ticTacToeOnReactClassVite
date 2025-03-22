// import styles from './InformationLayout.module.css';
import { useSelector } from 'react-redux';
import { selectIsGameEnded, selectIsDraw, selectCurrentPlayer } from '../../../selectors';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from '../../../actions';

export const Information = () => {
	const isDraw = useSelector(selectIsDraw);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

	const getStatusAboutGame = () => {
		if (isDraw === true) {
			return <p className="text-center text-5xl">Ничья</p>;
		}
		if (isDraw === false && isGameEnded === true) {
			return <p className="text-center text-5xl">Победа {currentPlayer}</p>;
		}
		if (isDraw === false && isGameEnded === false) {
			return <p className="text-center text-5xl">Ходит {currentPlayer}</p>;
		}
	};
	return (
		<>
			{getStatusAboutGame()}
			<div className="flex">
				<button
					className="w-24 h-14 mx-auto mt-8 rounded-lg text-lg bg-lime-100 mb-2"
					onClick={() => {
						dispatch(RESTART_GAME);
					}}
				>
					Начать заново
				</button>
			</div>
		</>
	);
};
