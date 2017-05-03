import reducer from './Gallery.reducer';

it('should initialize to zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0);
});

it('make sure it wraps around if goes over', () => {
  expect(reducer(0, {type: 'next'})).toEqual(1);
});

it('going to next image', () => {
  expect(reducer(5, {type: 'next'})).toEqual(0);
});

it('going to previous image', () => {
  expect(reducer(1, {type: 'previous'})).toEqual(0);
});

it('make sure it wraps around if goes under', () => {
  expect(reducer(0, {type: 'previous'})).toEqual(5);
});

it('jump to a specific image', () => {
  expect(reducer(0, {type: 'jump', idx: 5})).toEqual(5);
});

// Write additional tests for
// 1. going to next image
// 2. make sure it wraps around if goes over
// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
