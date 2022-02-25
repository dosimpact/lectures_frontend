import * as React from "react";
import { useState, useCallback, useRef } from "react";

// 1. 랜덤 숫자 4개 뽑기
// 2. 제출하기 - 스트라이크,볼 판정
// 3. 현재 상태
// 게임중
// 게임 종료 - 정답인경우, 10번 틀린경우
interface ITryLog {
  id: number;
  ball: number;
  strike: number;
}
interface IGameState {
  result: string;
  tryCounter: number;
  tryLog: ITryLog[];
  ans: number[];
}
const randomNumber = () => {
  const candidate = Array(9)
    .fill(null)
    .map((e, i) => i + 1);
  const result: number[] = [];
  for (let i = 0; i < 4; i++) {
    const ridx = Math.floor(Math.random() * candidate.length);
    result.push(...candidate.splice(ridx, 1));
  }
  return result;
};

const NB = () => {
  const [gameState, setGameState] = useState<IGameState>({
    ans: randomNumber(),
    tryCounter: 0,
    tryLog: [],
    result: "",
  });
  const [input, setInput] = useState("");
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      console.log("정답", gameState.ans);
      e.preventDefault();
      if (input.length === 4) {
        const userInput = input.split("").map((e) => Number(e));

        const newTryLog: ITryLog = {
          id: gameState.tryLog.length + 1,
          ball: userInput.filter((u) => gameState.ans.includes(u)).length, //gameState.ans.filter((a) => userInput.includes(a)).length,
          strike: userInput.filter((u, i) => gameState.ans[i] === userInput[i])
            .length,
        };
        // 정답인 경우
        if (newTryLog.strike === 4) {
          setGameState((p) => ({
            ...p,
            result: `👨‍💻 정답입니다~ : ${p.ans}(새로운 게임을 시작합니다.)`,
            ans: randomNumber(),
            tryCounter: 0,
            tryLog: [],
          }));
          setInput("");
          return;
        }
        // 오답인경우
        if (gameState.tryCounter + 1 === 10) {
          setGameState((p) => ({
            ...p,
            result: `👨‍💻 정답은... : ${p.ans}(다시 게임을 시작합니다.)`,
            ans: randomNumber(),
            tryCounter: 0,
            tryLog: [],
          }));
          setInput("");
          return;
        }

        setGameState((prev) => ({
          ...prev,
          tryLog: [...prev.tryLog, newTryLog],
          tryCounter: prev.tryCounter + 1,
        }));
      } else {
        setInput("");
      }
    },
    [gameState, input]
  );
  console.log(gameState.tryLog);

  return (
    <div>
      <h3>숫자야구게임 시도:{gameState.tryCounter}</h3>{" "}
      <div>{gameState.result}</div>
      <form onSubmit={handleSubmit}>
        입력 :
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
      {gameState.tryLog.map((log, key) => {
        return (
          <div key={key}>
            🚀 {log.id} | Ball : {log.ball} | Strike : {log.strike}
          </div>
        );
      })}
    </div>
  );
};

export default NB;
