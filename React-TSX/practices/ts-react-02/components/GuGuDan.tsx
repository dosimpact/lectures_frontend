import * as React from "react";
import { useState, useRef } from "react";

const genRandomNumber = () => Math.ceil(Math.random() * 9);

const GuGuDan = () => {
  const [a, setA] = useState(genRandomNumber());
  const [b, setB] = useState(genRandomNumber());

  const [ans, setAns] = useState<string>("");
  const [res, setRes] = useState<"정답" | "오답" | null>(null);

  const InputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(ans) === a * b) {
      setRes("정답");
      setA(genRandomNumber());
      setB(genRandomNumber());
      InputRef.current!.focus();
    } else {
      setRes("오답");
      setA(genRandomNumber());
      setB(genRandomNumber());
      if (InputRef.current) {
        InputRef.current.focus();
      }
      //   InputRef.current!.focus();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="question">
          {a}*{b} = ?{" "}
        </div>
        답:
        <input
          ref={InputRef}
          onChange={(e) => {
            setAns(e.target.value);
          }}
        />
      </form>
      <div>{res}</div>
    </div>
  );
};

export default GuGuDan;
