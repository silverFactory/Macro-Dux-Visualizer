 export default function songsReducer(
   state = {
     songs: [],
     requesting: false
   }, action){
   switch (action.type){
     case "START_SAVING_SONG":
       return {
         ...state,
         songs: [...state.songs],
         requesting: true
       }
     case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.newSong],
        requesting: false
      }
      case "LOG_IN":
      return {
        ...state,
        songs: [...state.songs, ...action.userAndSongs.songs]
      }
     default:
       return state
   }
 }
