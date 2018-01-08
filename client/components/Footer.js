import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colours, spacing, spacingValue } from '../ui/theme';

const styles = StyleSheet.create({
	footer: {
		background: colours.purple,
		color: 'white',
		padding: spacing,
		marginTop: spacingValue * 4,
		textAlign: 'center'
	},
	link: {
		textDecoration: 'none',

		':visited': {
			color: 'white'
		}
	}
});

const Footer = () => {
		return (
			<footer className={css(styles.footer)}>
				<a className={css(styles.link)} href="/">Fantasy Prem</a>
				<p>&copy; MSC Ltd</p>
			</footer>
		);
};

export default Footer;
