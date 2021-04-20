import React, { Component } from 'react'
import NewSongForm from './new_song_form'
import SongsContainer from './songs_container'
import { connect } from 'react-redux'

class Songs extends Component{

   render(){
     return(
       <div>
         <h1>{`${this.props.currentUser}'s`} Song Library</h1>
         <SongsContainer songs={this.props.songs}/>
         <NewSongForm />
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

export default connect(mapStateToProps)(Songs)
