// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state = {value: 0.6}, action) {
  var nextState = {};
  if(action.type === "flip"){
    if(action.value > 0.5){
     nextState = Object.assign({}, state, {
       status: "heads",
       value: action.value
     })
    }else{
     nextState = Object.assign({}, state, {
       status: "tails",
       value: action.value
     })
    }
  }else{
    nextState = Object.assign({}, state)
  }
  return nextState;
}

export default reducer;
