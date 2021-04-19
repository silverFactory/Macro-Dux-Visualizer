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
       break
     case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.newSong],
        requesting: false
      }
      break
     default:
       return state
   }
 }
