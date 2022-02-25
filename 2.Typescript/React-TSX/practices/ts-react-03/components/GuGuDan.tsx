import * as React from "react";
import { useState, useRef, useCallback } from "react";

const getRandomNumber = () => Math.ceil(Math.random() * 9);

const GuGuDan = () => {
  const [su, setSu] = useState<{ a: number; b: number }>({
    a: getRandomNumber(),
    b: getRandomNumber(),
  });
  const [ans, setAns] = useState("");
  const [res, setRes] = useState<"정답" | "오답" | ".">(".");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (ans) {
        if (Number(ans) === su.a * su.b) {
          setSu({
            a: getRandomNumber(),
            b: getRandomNumber(),
          });
          setRes("정답");
        } else {
          setRes("오답");
        }
        inputRef.current?.focus();
      }
    },
    [ans, su]
  );

  return (
    <div>
      <h2>
        {su.a}*{su.b} = ?
      </h2>
      <form onSubmit={handleSubmit}>
        정답:{" "}
        <input
          ref={inputRef}
          type="text"
          value={ans}
          onChange={(e) => setAns(e.target.value)}
        ></input>
        {res}
      </form>
    </div>
  );
};

export default GuGuDan;
