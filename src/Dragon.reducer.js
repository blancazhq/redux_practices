function reducer(state={dragon: 20, hero: 10}, action){
  var nextState;
  if(action.type === "fight"){
    if(action.num>0.5){
      nextState = Object.assign({}, state,{
        dragon: state.dragon-5
      })
    }else{
      nextState = Object.assign({}, state,{
        hero: state.hero-5
      })
    }
  }else if(action.type === "flight"){
    nextState = Object.assign({}, state, {
      hero: state.hero+2
    })
  }else if(action.type === "restart"){
    nextState = Object.assign({}, state, {
      hero: 10,
      dragon: 20
    })
  }else{
    nextState = state;
  }
  return nextState;
}

export default reducer;
