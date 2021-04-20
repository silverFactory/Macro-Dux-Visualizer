export default function macrosReducer(
  state = {
    macro1: 5,
    macro2: 5,
    macro3: 5,
    macro4: 5,
    macro5: 5,
    macro6: 5,
    macro7: 5,
    macro8: 5,
    macro9: 5
  },
  action){
  switch (action.type){
    case "UPDATE_MACRO":
      return Object.assign({}, state, action.macro)
    default:
      return state
  }
}
