const imagePath = 'public/assets/badges';

const clubs = {
	1: {
		name: 'Arsenal',
		apiname: 'Arsenal',
		abbr: 'ARS',
		badgeUrl: `${imagePath}/arsenal.svg`,
		primaryColour: '#EA2212',
		secondaryColour: '#FFFFFF'
	},
	2: {
		name: 'Bournemouth',
		apiname: 'Bournemouth',
		abbr: 'BOU',
		badgeUrl: `${imagePath}/bournemouth.svg`,
		primaryColour: '#E62333',
		secondaryColour: '#000000'
	},
	3: {
		name: 'Brighton & Hove Albion',
		apiname: 'Brighton',
		abbr: 'BHA',
		badgeUrl: `${imagePath}/brighton.svg`,
		primaryColour: '#0054A6',
		secondaryColour: '#FFFFFF'
	},
	4: {
		name: 'Burnley',
		apiname: 'Burnley',
		abbr: 'BUR',
		badgeUrl: `${imagePath}/burnley.png`,
		primaryColour: '#53162F',
		secondaryColour: '#8CCCE5'
	},
	5: {
		name: 'Chelsea',
		apiname: 'Chelsea',
		abbr: 'CHE',
		badgeUrl: `${imagePath}/chelsea.svg`,
		primaryColour: '#034694',
		secondaryColour: '#FFFFFF'
	},
	6: {
		name: 'Crystal Palace',
		apiname: 'Crystal Palace',
		abbr: 'CRY',
		badgeUrl: `${imagePath}/crystal_palace.svg`,
		primaryColour: '#1B458F',
		secondaryColour: '#C4122E'
	},
	7: {
		name: 'Everton',
		apiname: 'Everton',
		abbr: 'EVE',
		badgeUrl: `${imagePath}/everton.svg`,
		primaryColour: '#274488',
		secondaryColour: '#FFFFFF'
	},
	8: {
		name: 'Huddersfield Town',
		apiname: 'Huddersfield',
		abbr: 'HUD',
		badgeUrl: `${imagePath}/huddersfield.svg`,
		primaryColour: '#0072CE',
		secondaryColour: '#FFFFFF'
	},
	9: {
		name: 'Leicester City',
		apiname: 'Leicester',
		abbr: 'LEI',
		badgeUrl: `${imagePath}/leicester.svg`,
		primaryColour: '#0053A0',
		secondaryColour: '#FDBE11'
	},
	10: {
		name: 'Liverpool',
		apiname: 'Liverpool',
		abbr: 'LIV',
		badgeUrl: `${imagePath}/liverpool.svg`,
		primaryColour: '#D00027',
		secondaryColour: '#FFFFFF'
	},
	11: {
		name: 'Manchester City',
		apiname: 'Man City',
		abbr: 'MNC',
		badgeUrl: `${imagePath}/manchester_city.svg`,
		primaryColour: '#5CBFEB',
		secondaryColour: '#003177'
	},
	12: {
		name: 'Manchester United',
		apiname: 'Man Utd',
		abbr: 'MNU',
		badgeUrl: `${imagePath}/manchester_united.svg`,
		primaryColour: '#DA020E',
		secondaryColour: '#000000'
	},
	13: {
		name: 'Newcastle United',
		apiname: 'Newcastle',
		abbr: 'NEW',
		badgeUrl: `${imagePath}/newcastle.svg`,
		primaryColour: '#000000',
		secondaryColour: '#FFFFFF'
	},
	14: {
		name: 'Southampton',
		apiname: 'Southampton',
		abbr: 'SOU',
		badgeUrl: `${imagePath}/southampton.svg`,
		primaryColour: '#ED1A3B',
		secondaryColour: '#FFFFFF'
	},
	15: {
		name: 'Stoke City',
		apiname: 'Stoke',
		abbr: 'STK',
		badgeUrl: `${imagePath}/stoke.svg`,
		primaryColour: '#E03A3E',
		secondaryColour: '#FFFFFF'
	},
	16: {
		name: 'Swansea City',
		apiname: 'Swansea',
		abbr: 'SWA',
		badgeUrl: `${imagePath}/swansea.svg`,
		primaryColour: '#FFFFFF',
		secondaryColour: '#000000'
	},
	17: {
		name: 'Tottenham Hotspur',
		apiname: 'Spurs',
		abbr: 'TOT',
		badgeUrl: `${imagePath}/tottenham.svg`,
		primaryColour: '#FFFFFF',
		secondaryColour: '#001C58'
	},
	18: {
		name: 'Watford',
		apiname: 'Watford',
		abbr: 'WAT',
		badgeUrl: `${imagePath}/watford.svg`,
		primaryColour: '#FBEE23',
		secondaryColour: '#ED2127'
	},
	19: {
		name: 'West Bromwich Albion',
		apiname: 'West Brom',
		abbr: 'WBA',
		badgeUrl: `${imagePath}/west_brom.svg`,
		primaryColour: '#091453',
		secondaryColour: '#FFFFFF'
	},
	20: {
		name: 'West Ham United',
		apiname: 'West Ham',
		abbr: 'WHU',
		badgeUrl: `${imagePath}/west_ham.svg`,
		primaryColour: '#60223B',
		secondaryColour: '#5299C6'
	}
};

const getClubInfo = teamNumber => {
	return clubs[teamNumber];
};

export default getClubInfo;
