export const items = (state = [], action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			return [
				{
					id: action.payload.id,
					text: action.payload.text,
				},
				...state,
			];
		}

		case "DEL_ITEM": {
			return state.filter(item => item.id !== action.id);
		}

		default:
			return state;
	}
};

export const lists = (state = [], action) => {
	switch (action.type) {
		case "ADD_LIST": {
			return [
				{
					id: action.payload.id,
					text: action.payload.text,
				},
				...state,
			];
		}

		case "DEL_LIST": {
			return state.filter(item => item.id !== action.id);
		}

		default:
			return state;
	}
};
