import * as React from "react";
import { useState, useCallback, useRef } from "react";
const WordRelay2 = () => {
  const [word, setWord] = useState("나락");
  const [userWord, setUserword] = useState("");
  const [res, setRes] = useState<"정답" | "오답" | ".">(".");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback<
    (e: React.FormEvent<HTMLFormElement>) => void
  >(
    (e) => {
      e.preventDefault();
      if (word[word.length - 1] === userWord[0]) {
        setRes("정답");
        setWord(userWord);
        setUserword("");
      } else {
        setRes("오답");
      }
      inputRef.current?.focus();
    },
    [userWord, word]
  );
  return (
    <div>
      <h2>WordRelay2</h2>
      단어 : {word}
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={userWord}
          onChange={(e) => setUserword(e.target.value)}
        />
        {res}
      </form>
    </div>
  );
};

export default WordRelay2;
