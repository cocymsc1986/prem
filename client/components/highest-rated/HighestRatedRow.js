import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import HighestRatedContainer from './HighestRatedContainer';
import {maxWidth, spacingValue} from '../../ui/theme';

const styles = StyleSheet.create({
	highestRatedBlock: {
		maxWidth: maxWidth,
		margin: `${spacingValue * 2}px auto`
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between'
	}
});

class HighestRatedRow extends Component {
	render() {
		return (
			<div className={css(styles.highestRatedBlock)}>
				<h2>Top performers</h2>
				<div className={css(styles.row)}>
					<HighestRatedContainer position='goalkeeper' />
					<HighestRatedContainer position='defender' />
					<HighestRatedContainer position='midfielder' />
					<HighestRatedContainer position='forward' />
				</div>
			</div>
		);
	}
}

export default HighestRatedRow;
