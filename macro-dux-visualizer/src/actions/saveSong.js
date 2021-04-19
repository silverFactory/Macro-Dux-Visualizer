export function saveSong(song) {
  return (dispatch) => {
    dispatch({ type: 'START_SAVING_SONG' });
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: song
    }
    fetch("http://localhost:3000/songs", configObj)
      .then(response => response.json())
      .then(newSong => dispatch({ type: 'ADD_SONG', newSong }));
  };
}
