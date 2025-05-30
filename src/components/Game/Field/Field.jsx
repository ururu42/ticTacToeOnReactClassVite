// import styles from './FieldLayout.module.css';
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
				className={
					isGameEnded
						? 'w-24 h-24 border-2 flex-[0_0_calc(100%/3)] min-w-[calc(100%/3)] text-5xl bg-sky-500'
						: 'w-24 h-24 border-2 flex-[0_0_calc(100%/3)] min-w-[calc(100%/3)] text-5xl '
				}
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
			<div className="flex w-80 flex-wrap mx-auto ">{renderButtonsOfField}</div>
		</>
	);
};
