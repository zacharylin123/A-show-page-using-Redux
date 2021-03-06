import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
    renderList() {
        //console.log(this.props);
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectedSong(song)}
                            className="ui button primary"
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        // this.props === { songs: state.songs}
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    console.log(state);
    // to get the songs from provider
    return { songs: state.songs };
};

// key: action creator
export default connect(
    mapStateToProps,
    { selectedSong: selectSong }
)(SongList);
