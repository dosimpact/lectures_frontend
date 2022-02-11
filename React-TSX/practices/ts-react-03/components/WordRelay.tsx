import * as React from "react";
import { useEffect, useState, useCallback, useRef } from "react";

const words = ["흐림", "리애그", "떡볶이", "밤빵", "마이크"];

const WordRelay = () => {
  const [word, setWorld] = useState(
    words[Math.ceil(Math.random() * words.length)]
  );
  const [ans, setAns] = useState("");
  const [result, setResult] = useState(".");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(word[word.length - 1], ans[0]);

      if (ans && word[word.length - 1] === ans[0]) {
        setWorld(ans);
        setAns("");
        setResult("정답");
        if (inputRef.current) {
          inputRef.current.focus();
        }
      } else {
        setAns("");
        setResult("오답");
      }
    },
    [word, ans]
  );

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAns(e.currentTarget.value);
  }, []);

  return (
    <div>
      <div>단어:{word}</div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={ans} onChange={handleInput} />
      </form>
      <div>{result}</div>
    </div>
  );
};

export default WordRelay;
