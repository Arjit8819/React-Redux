import React from  "react";
import {selectedSongReducer} from "../reducers";
import {connect} from "react-redux";
import {selectSong} from "../actions";


class SongDetails extends React.Component {
    
    render(){
        if(!this.props.song){
            return <div>no song</div>
        }
        return (
        <div>
            <h3> Title : </h3>  {this.props.song.title}
            <br />
            <h3>Duration : </h3> {this.props.song.duration}
        </div>);
    }
}

const mapStateToProps = (state) => {
    //  console.log(state.selectedSong);
    return {song :state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);