// the default list of free agents, which is empty
const playersDefaultState = [];

const playersReducer = (state = playersDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_PLAYERS':
            return action.players;
            
        case 'ADD_PLAYER':
            return [
                ...state,
                action.player
            ];

        case 'REMOVE_PLAYER':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_PLAYER':
            return state.map((player) => {
                if (player.id === action.id) {
                    return {
                        ...player,
                        ...action.updates
                    };
                }
                else {
                    return player;
                }
            });

        default:
            return state;
    }
};

export default playersReducer;