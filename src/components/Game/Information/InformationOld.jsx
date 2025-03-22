import { Component } from 'react';
import { connect } from 'react-redux';
import { RESTART_GAME } from '../../../actions';

export class OldInformationContainer extends Component {
	constructor(props) {
		super(props);
	}

	getStatusAboutGame() {
		if (this.props.isDraw === true) {
			return <p className="text-center text-5xl">Ничья</p>;
		}
		if (this.props.isDraw === false && this.props.isGameEnded === true) {
			return (
				<p className="text-center text-5xl">Победа {this.props.currentPlayer}</p>
			);
		}
		if (this.props.isDraw === false && this.props.isGameEnded === false) {
			return (
				<p className="text-center text-5xl">Ходит {this.props.currentPlayer}</p>
			);
		}
	}

	render() {
		return (
			<>
				{this.getStatusAboutGame()}
				<div className="flex">
					<button
						className="w-24 h-14 mx-auto mt-8 rounded-lg text-lg bg-lime-100 mb-2"
						onClick={() => {
							this.props.dispatch(RESTART_GAME);
						}}
					>
						Начать заново
					</button>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export const OldInformation = connect(mapStateToProps)(OldInformationContainer);
