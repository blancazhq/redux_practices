import reducer from "./Dragon.reducer"

it("initialize dragon and hero's health", () => {
  expect(reducer(undefined, {type:null})).toEqual({dragon: 20, hero: 10});
});

it("choose fight to damage either dragon or hero", () => { var currentState = {dragon: 20, hero: 10};
  var action = {type: "fight", num: 0.6}
  expect(reducer(currentState, action)).toEqual({dragon: 15, hero: 10});
});

it("choose flight to add 2 health to hero", () => { var currentState = {dragon: 20, hero: 10};
  var action = {type: "flight"}
  expect(reducer(currentState, action)).toEqual({dragon: 20, hero: 12});
});



/*
1. The dragon will initially have 20 health.
2. The hero will initially have 10 health.
3. Display the health of the dragon and the hero.
4. The hero will chose to either
  a. fight - click the "Fight" button or
  b. flight - click the "Flight" button
5. If hero chooses to fight, it will either deal 5 damages to the dragon or the hero - randomly (50/50 chance).
6. If hero chooses flight, he will get 2 health back.
7. If the dragon's health goes below 0, dragon dies, player wins.
8. If the hero's health goes below 0, hero dies, player loses.
*/
