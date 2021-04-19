export default function macrosReducer(
  state = {
    macro1: 0,
    macro2: 0,
    macro3: 0,
    macro4: 0,
    macro5: 0,
    macro6: 0,
    macro7: 0,
    macro8: 0,
    macro9: 0
  },
  action){
  switch (action.type){
    case "UPDATE_MACRO":
      return Object.assign({}, state, action.macro)
    default:
      return state
  }
}
