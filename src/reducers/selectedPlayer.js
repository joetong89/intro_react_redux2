const selectedPlayerDefaultState = {
	id: 0
};

const selectedPlayerReducer = (state = selectedPlayerDefaultState, action) => {

	switch (action.type) {

		case 'SET_SELECTED_PLAYER':
			return {
				...state,
				id: action.id
			}
		default: 
			return state;
	}
}

export default selectedPlayerReducer;