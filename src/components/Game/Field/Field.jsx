import styles from './FieldLayout.module.css';
import { useSelector } from 'react-redux';
import { selectField, selectIsGameEnded } from '../../../selectors';
import { useDispatch } from 'react-redux';
import { setField } from '../../../actions';

export const Field = () => {
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

	const renderButtonsOfField = field?.map((element, index) => {
		return (
			<button
				className={isGameEnded ? styles.buttonGameEnd : styles.button}
				key={index}
				onClick={() => {
					onClick(index);
				}}
			>
				{element}
			</button>
		);
	});

	const onClick = (index) => {
		if (field[index] === '' && isGameEnded === false) {
			dispatch(setField(index));
		}
	};

	return (
		<>
			<div className={styles.buttonContainer}>{renderButtonsOfField}</div>
		</>
	);
};
