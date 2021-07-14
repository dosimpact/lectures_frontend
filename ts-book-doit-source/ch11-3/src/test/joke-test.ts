import fetch from 'node-fetch'
import * as R from 'ramda'
import {IMaybe, Maybe} from '../classes/Maybe'

const random = (max: number) => Math.floor(Math.random() * max)
type StringMaybe = IMaybe<string>
const _getRandomJoke = () => new Promise<StringMaybe>((resolve, reject) => {
  type ValueType = {id: number, joke: string, categories: string[]}
  type FetchResult = { type: string, value: ValueType[]}

  const jokeUrl = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]'
  const lens = R.lensPath(['value', 10, 'joke'])
  fetch(jokeUrl)
    .then(res => res.json())
    .then(R.view(R.lensPath(['value'])))
    .then( (jokes: unknown) => {
      const jokeArray = (jokes as ValueType[])
      const joke = R.view(R.lensPath([random(jokeArray.length), 'joke']))(jokeArray)
      resolve(Maybe.Just(joke as string))
    })
    .catch(e => resolve(Maybe.Nothing))
})

const getRandomJoke = async() => {
  let maybe = await _getRandomJoke()
  let joke = maybe.getOrElse('')
  console.log('joke', joke)
}

getRandomJoke()
