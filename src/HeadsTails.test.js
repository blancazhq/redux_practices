import reducer from './HeadsTails.reducer';

it('starts with a random number', () => {
  expect(reducer(undefined, {type: 'flip', value: 0.6})).toEqual({value: 0.6, status: "heads"});
});

it('flip to tails', () => {
  let currentState = {
    value: 0.6,
    status: "heads"
  }
  let action = {
    type: 'flip',
    value: 0.4
  };
  expect(reducer(currentState, action)).toEqual({value: 0.4, status: "tails"});
});

it('flip to heads', () => {
  let currentState = {
    value: 0.6,
    status: "heads"
  }
  let action = {
    type: 'flip',
    value: 0.6
  };
  expect(reducer(currentState, action)).toEqual({value: 0.6, status: "heads"});
});
