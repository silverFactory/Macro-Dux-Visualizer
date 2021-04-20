import React, { Component } from 'react'
import NewSongForm from './new_song_form'
import SongsContainer from './songs_container'
import { connect } from 'react-redux'
import { saveSong } from './actions/saveSong'

class Songs extends Component{

   render(){
     return(
       <div>
         <h1>{`${this.props.currentUser}'s`} Song Library</h1>
         <SongsContainer songs={this.props.songs}/>
         <NewSongForm
           currentUser={this.props.currentUser}
           saveSong={this.props.saveSong}
           />
       </div>
     )
   }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser,
    songs: state.songs.songs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveSong: (song) => dispatch(saveSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
