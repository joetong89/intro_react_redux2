import React from 'react';
import PlayerForm from './PlayerForm';
import { connect } from 'react-redux';
import { setSelectedPlayer } from '../actions/selectedPlayer';
import { editPlayer, removePlayer} from '../actions/players';

class EditPlayerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="container">
                <h1>Edit Player</h1>
                <PlayerForm
                    player={this.props.player}
                    onSubmit={(player) => {
                        this.props.dispatch(editPlayer(this.props.player.id, player));
                        this.props.history.push('/');
                    }}
                />
                <button className="button button-delete" onClick={() => {
                    this.props.dispatch(removePlayer({ id: this.props.player.id}));
                    this.props.history.push('/');
                }}>Remove</button>
            </div>
        );
    }
    
}

const mapStateToProps = (state, props) => ({
    player: state.players.find((player) => player.id == props.match.params.id)
});

export default connect(mapStateToProps)(EditPlayerPage);