import * as R from 'ramda'

const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
const transformations = {
  firstName: R.trim,
  lastName: R.trim, // Will not get invoked.
  data: {elapsed: R.add(1), remaining: R.add(-1)}
}
const newTomato = R.evolve(transformations, tomato)
console.log(newTomato)
/*
{
  firstName: 'Tomato',
  data: { elapsed: 101, remaining: 1399 },
  id: 123
}
*/