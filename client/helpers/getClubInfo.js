const imagePath = 'client/public/assets/badges';

const clubs = {
	1: {
		name: 'Arsenal',
		badgeUrl: `${imagePath}/arsenal.svg`,
		primaryColour: '#EA2212',
		secondaryColour: '#FFFFFF'
	},
	2: {
		name: 'Bournemouth',
		badgeUrl: `${imagePath}/bournemouth.svg`,
		primaryColour: '#E62333',
		secondaryColour: '#000000'
	},
	3: {
		name: 'Brighton & Hove Albion',
		badgeUrl: `${imagePath}/brighton.svg`,
		primaryColour: '#0054A6',
		secondaryColour: '#FFFFFF'
	},
	4: {
		name: 'Burnley',
		badgeUrl: `${imagePath}/burnley.png`,
		primaryColour: '#53162F',
		secondaryColour: '#8CCCE5'
	},
	5: {
		name: 'Chelsea',
		badgeUrl: `${imagePath}/chelsea.svg`,
		primaryColour: '#034694',
		secondaryColour: '#FFFFFF'
	},
	6: {
		name: 'Crystal Palace',
		badgeUrl: `${imagePath}/crystal_palace.svg`,
		primaryColour: '#1B458F',
		secondaryColour: '#C4122E'
	},
	7: {
		name: 'Everton',
		badgeUrl: `${imagePath}/everton.svg`,
		primaryColour: '#274488',
		secondaryColour: '#FFFFFF'
	},
	8: {
		name: 'Huddersfield Town',
		badgeUrl: `${imagePath}/huddersfield.svg`,
		primaryColour: '#0072CE',
		secondaryColour: '#FFFFFF'
	},
	9: {
		name: 'Leicester City',
		badgeUrl: `${imagePath}/liecester_city.svg`,
		primaryColour: '#0053A0',
		secondaryColour: '#FDBE11'
	},
	10: {
		name: 'Liverpool',
		badgeUrl: `${imagePath}/liverpool.svg`,
		primaryColour: '#D00027',
		secondaryColour: '#FFFFFF'
	},
	11: {
		name: 'Manchester City',
		badgeUrl: `${imagePath}/manchester_city.svg`,
		primaryColour: '#5CBFEB',
		secondaryColour: '#003177'
	},
	12: {
		name: 'Manchester United',
		badgeUrl: `${imagePath}/manchester_united.svg`,
		primaryColour: '#DA020E',
		secondaryColour: '#000000'
	},
	13: {
		name: 'Newcastle United',
		badgeUrl: `${imagePath}/newcastle.svg`,
		primaryColour: '#000000',
		secondaryColour: '#FFFFFF'
	},
	14: {
		name: 'Southampton',
		badgeUrl: `${imagePath}/southampton.svg`,
		primaryColour: '#ED1A3B',
		secondaryColour: '#FFFFFF'
	},
	15: {
		name: 'Stoke City',
		badgeUrl: `${imagePath}/stoke.svg`,
		primaryColour: '#E03A3E',
		secondaryColour: '#FFFFFF'
	},
	16: {
		name: 'Swansea City',
		badgeUrl: `${imagePath}/swansea.svg`,
		primaryColour: '#FFFFFF',
		secondaryColour: '#000000'
	},
	17: {
		name: 'Tottenham Hotspur',
		badgeUrl: `${imagePath}/tottenham.svg`,
		primaryColour: '#FFFFFF',
		secondaryColour: '#001C58'
	},
	18: {
		name: 'Watford',
		badgeUrl: `${imagePath}/watford.svg`,
		primaryColour: '#FBEE23',
		secondaryColour: '#ED2127'
	},
	19: {
		name: 'West Bromwich Albion',
		badgeUrl: `${imagePath}/west_brom.svg`,
		primaryColour: '#091453',
		secondaryColour: '#FFFFFF'
	},
	20: {
		name: 'West Ham United',
		badgeUrl: `${imagePath}/west_ham.svg`,
		primaryColour: '#60223B',
		secondaryColour: '#5299C6'
	}
};

const getClubInfo = teamNumber => {
	return clubs[teamNumber];
};

export default getClubInfo;
