export function signUp(user) {
  return (dispatch) => {
    dispatch({ type: 'START_SIGN_UP' });
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      }).then(response => response.json())
      //.then(resp => console.log(resp))
       .then(newUser => dispatch({ type: 'FIRST_LOG_IN', username: newUser.username }))
  };
}
