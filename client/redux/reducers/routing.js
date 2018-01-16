const initialState = {
	baseUrl: 'http://localhost:5000/',
	currentUrl: null
};

export default function routing(state = initialState, action) {
	switch (action.type) {
		case 'GO_TO_URL':
			console.info(`going to ${action.value}`);
			const newUrl = `${state.baseUrl}${action.value}`;
			Object.assign({}, state, {
				currentUrl: newUrl,
				...initialState
			});
			window.location = newUrl;
			return state;

		default:
      return state;
	}
}
