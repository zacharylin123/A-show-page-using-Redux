import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
    if (!mySelectedSong) {
        return <h3>Please select a song</h3>;
    } else {
        return (
            <div>
                <h3>Details:</h3>
                <p>Title:{mySelectedSong.title}</p>
                <p>Duration: {mySelectedSong.duration}</p>
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log(state);
    return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
