import React from 'react'
import NewSongForm from './new_song_form'
import SongsContainer from './songs_container'

export default function Songs(){

  return(
    <div>
      <h1>[Username's] Song Library</h1>
      <NewSongForm />
      <SongsContainer />
    </div>
  )
}
