import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from "react-redux";

import Counter from './Counter';
import CounterReducer from './Counter.reducer';
import Gallery from './Gallery';
import GalleryReducer from './Gallery.reducer';
import HeadsTails from './HeadsTails';
import HeadsTailsReducer from './HeadsTails.reducer';
import Dragon from './Dragon';
import DragonReducer from './Dragon.reducer';

const INITIAL_STATE = {
  count: 0,
  gallery: {
    currentIdx: 0,
    images: [
      'images/comfy.jpg',
      'images/farted.jpg',
      'images/hate.jpg',
      'images/lolcat_airplane.jpg',
      'images/mocked.jpg',
      'images/monorail.jpg',
    ]
  },
  headstails: {
    value: 0.6
  },
  dragon: {
    dragon: 20,
    hero: 10
  }
}

function reducer(state = INITIAL_STATE, action){
  return {
    count: CounterReducer(state.count, action),
    gallery: GalleryReducer(state.gallery, action),
    headstails: HeadsTailsReducer(state.headstails, action),
    dragon: DragonReducer(state.dragon, action)
  };
}

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const CounterContainer = ReactRedux.connect(
  state => ({count: state.count}),
  dispatch => ({
    add: () => dispatch({
      type: "add"
    }),
    subtract: () => dispatch({
      type: "subtract"
    })
  })
)(Counter);

const GalleryContainer = ReactRedux.connect(
  state => ({gallery: state.gallery}),
  dispatch => ({
    next: () => dispatch({
      type: "next"
    }),
    previous: () => dispatch({
      type: "previous"
    }),
    jump: (idx) => dispatch({
      type: "jump",
      index: idx
    })
  })
)(Gallery);

const HeadsTailsContainer = ReactRedux.connect(
  state => ({headstails: state.headstails}),
  dispatch => ({
    flip: () => dispatch({
      type: "flip",
      value: Math.random()
    })
  })
)(HeadsTails)

const DragonContainer = ReactRedux.connect(
  state => ({dragon: state.dragon}),
  dispatch => ({
    fight: () => dispatch({
      type: "fight",
      num: Math.random()
    }),
    flight: () => dispatch({
      type: "flight"
    }),
    restart: () => dispatch({
      type: "restart"
    })
  })
)(Dragon)

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <CounterContainer/>
      <GalleryContainer/>
      <HeadsTailsContainer/>
      <DragonContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById("root")
)
