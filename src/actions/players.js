import axios from 'axios';

export const addAllPlayers = (players) => {
	return {
		type: 'LOAD_PLAYERS',
		players,
	}
}

export const loadPlayers = () => {
	return (dispatch) => {
		axios.get('http://134.209.49.196/api/players')
		.then((res) => {
			dispatch(addAllPlayers(res.data.players));
		})
		.catch((err) => {
			console.log(err);
		});
	}
};

export const addPlayer = (history, { name, message = '', sport_type = 'hockey', skill_level = 'basic', gender = 'Male' } = {}) => {
   	return (dispatch) => {
   		axios.post('http://134.209.49.196/api/players', {
   			name,
   			message,
   			sport_type,
   			type: sport_type,
   			skill_level,
   			gender
   		}).then((res) => {
   			dispatch(addAllPlayers(res.data.players));
   			history.push('/');
   		}).catch((err) => {
			console.log(err);
		});
   	}
}
  
export const removePlayer = ({ id } = {}) => {
    return (dispatch) => {
    axios.delete('http://134.209.49.196/api/players/'+id)
      .then((res) => {
        dispatch(addAllPlayers(res.data.players));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const editPlayer = (id, updates) => {
  return (dispatch) => {
    axios.put('http://134.209.49.196/api/players/'+id, updates)
      .then((res) => {
        dispatch(addAllPlayers(res.data.players));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};