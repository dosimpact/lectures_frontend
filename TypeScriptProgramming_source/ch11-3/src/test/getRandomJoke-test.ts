import * as R from "ramda";
import { getRandomJoke, JokeType } from "../getRandomJoke";

getRandomJoke()
  .then((JokeItem: JokeType) => {
    const joke = R.view(R.lensProp("joke"))(JokeItem);
    console.log(joke); // Chuck Norris doesn't need an OS.
  })
  .catch((e: Error) => console.log(e.message));
