import styles from './InformationLayout.module.css';
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
			return <p className={styles.info}>Ничья</p>;
		}
		if (isDraw === false && isGameEnded === true) {
			return <p className={styles.info}>Победа {currentPlayer}</p>;
		}
		if (isDraw === false && isGameEnded === false) {
			return <p className={styles.info}>Ходит {currentPlayer}</p>;
		}
	};
	return (
		<>
			{getStatusAboutGame()}
			<div className={styles.buttonContainer}>
				<button
					className={styles.buttonRestart}
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
