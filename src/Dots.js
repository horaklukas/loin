import React from 'react';
import styles from './styles';
import Timer from './Timer';

const MAX_DOTS_COUNT = 3;

const repeat = (str, count) => {
	var rpt = '';

	for (;;) {
		if ((count & 1) == 1) {
			rpt += str;
		}
		count >>>= 1;
		if (count == 0) {
			break;
		}
		str += str;
	}

	return rpt;
};

export const LoadingIndicator = (props) => {
	const {ticks, message} = props;
	const messageText = message !== undefined ? message : 'Loading';
	const dotsCount = ticks % (MAX_DOTS_COUNT + 1);
	const dots = repeat('.', dotsCount);

    return (
        <div className="indicator">
          <span className="message">{messageText}</span>
          <span className="ellipsis" style={styles.ellipsis}>{dots}</span>
        </div>
    )
};

export default Timer(LoadingIndicator);