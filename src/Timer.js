import React from 'react';

export default (LoadingIndicator) => {
	return class Timer extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				ticks: 0
			}
		}

		componentWillMount() {
			this.timer = setInterval(() => this.incrementTicks(), TICK);
		}

		componentWillUnmount() {
			clearInterval(this.timer);
		}

		incrementTicks() {
			this.setState(prevState => ({ticks: this.state.ticks + 1}));
		}

		render() {
			return <LoadingIndicator {...this.props} ticks={this.state.ticks} />
		}
	}
}

export const TICK = 500;
