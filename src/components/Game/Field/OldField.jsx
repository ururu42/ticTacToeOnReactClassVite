import { Component } from 'react';
import { connect } from 'react-redux';
import { setField } from '../../../actions';

export class OldFieldContainer extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(index) {
		if (this.props.field[index] === '' && this.props.isGameEnded === false) {
			this.props.dispatch(setField(index));
		}
	}

	render() {
		const { field, isGameEnded } = this.props;

		return (
			<>
				<div className="flex w-80 flex-wrap mx-auto ">
					{field?.map((element, index) => {
						return (
							<button
								className={
									isGameEnded
										? 'w-24 h-24 border-2 flex-[0_0_calc(100%/3)] min-w-[calc(100%/3)] text-5xl bg-sky-500'
										: 'w-24 h-24 border-2 flex-[0_0_calc(100%/3)] min-w-[calc(100%/3)] text-5xl '
								}
								key={index}
								onClick={() => {
									this.onClick(index);
								}}
							>
								{element}
							</button>
						);
					})}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
});

export const OldField = connect(mapStateToProps)(OldFieldContainer);
