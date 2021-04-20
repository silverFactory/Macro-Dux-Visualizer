export function logIn(user){
  return (dispatch) => {
    dispatch({ type: 'START_LOG_IN' });
    fetch("http://localhost:3000/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      }).then(response => response.json())
      //.then(currentUser => console.log(currentUser.username))
      //.then(currentUser => dispatch({ type: 'LOG_IN', username: currentUser.username }))
      .then(userAndSongs => dispatch({ type: 'LOG_IN', userAndSongs }))
  };
}
