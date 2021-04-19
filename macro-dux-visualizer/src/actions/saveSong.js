export function saveSong(song) {
  return (dispatch) => {
    dispatch({ type: 'START_SAVING_SONG' });
    fetch("http://localhost:3000/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(song)
      }).then(response => response.json())
      .then(resp => console.log(resp))
      // .then(newSong => dispatch({ type: 'ADD_SONG', newSong }))
  };
}
