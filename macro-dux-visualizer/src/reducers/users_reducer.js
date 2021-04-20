 export default function usersReducer(
   state = {
     currentUser: null,
     requesting: false
   }, action){
   switch (action.type){
     case "START_LOG_IN":
       return {
         ...state,
         requesting: true
       }
     case "LOG_IN":
      return {
        ...state,
        currentUser: action.userAndSongs.user.username, 
        requesting: false
      }
     default:
       return state
   }
 }
