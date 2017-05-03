var GALLERY_INITIAL_STATE = {
  currentIdx: 0,
  images: [
    'images/comfy.jpg',
    'images/farted.jpg',
    'images/hate.jpg',
    'images/lolcat_airplane.jpg',
    'images/mocked.jpg',
    'images/monorail.jpg',
  ]
}

function reducer(state=GALLERY_INITIAL_STATE, action) {
  var nextState = {};
  if(action.type === "next"){
    if(state.currentIdx===5){
      nextState = Object.assign({}, state, {
        currentIdx: 0
      })
    }else{
      nextState = Object.assign({}, state, {
        currentIdx: state.currentIdx+1
      })
    }
  }else if(action.type === "previous"){
    if(state.currentIdx===0){
      nextState = Object.assign({}, state, {
        currentIdx: 5
      })
    }else{
      nextState = Object.assign({}, state, {
        currentIdx: state.currentIdx-1
      })
    }
  }else if(action.type === "jump"){
    nextState = Object.assign({}, state, {
      currentIdx: action.index
    })
  }else{
    nextState = state;
  }

  return nextState
}

export default reducer;
