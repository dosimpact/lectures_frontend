import {fetchJokes} from '../fetchJokes'

type FetchResult = {type: string, value: ValueType[]}
type ValueType = { id: number, joke: string, category: any[]}
fetchJokes<FetchResult>()
  .then((result: FetchResult) => console.log(result.value[0]))
  .catch((e: Error) => console.log(e.message))

/* { id: 505, joke: 'Chuck Norris can spawn threads that complete before they are started.',
     categories: [ 'nerdy' ] }
*/

