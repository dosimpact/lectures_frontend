import * as React from "react";
import { useState, useCallback, useRef } from "react";

// 1. state
// 대기상태 waiting
// 준비 ready
// 바뀜 now
// 결과 waiting
const RC = () => {
  const [resultTimes, setResultTimes] = useState<number[]>();
  const screenRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ready" | "now" | "waiting">("waiting");
  const [ment, setMent] = useState("시작하려면 클릭");
  const [timeLogger, setTimeLogger] = useState<number[]>([]);

  const timerRef = useRef<number>();
  const startTime = useRef<number>();
  const endTime = useRef<number>();

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // state 대기중 - 준비상태로 두고, timer 설정
    if (state === "waiting") {
      setState("ready");
      setMent("준비..");
      const timer = window.setTimeout(() => {
        setState("now");
        setMent("클릭!!");
        startTime.current = Date.now();
      }, Math.floor(Math.random() * 1000 + 1000));
      timerRef.current = timer;
    }
    // 너무 빨리 누른 경우
    if (state === "ready") {
      setState("waiting");
      setMent("너무빨리 눌렀음, 시작하려면 다시 클릭");
      clearTimeout(timerRef.current);
    }
    // 적절하게 누른 경우
    if (state === "now") {
      endTime.current = Date.now();
      setTimeLogger((t) => [...t, endTime.current! - startTime.current!]);
      setState("waiting");
      setMent("시작하려면 클릭");
    }
  };

  const renderAvg = () => {
    const avg =
      timeLogger.length === 0
        ? 0
        : timeLogger.reduce((p, store) => p + store, 0) /
          (1000 * timeLogger.length);
    return <div>{avg}s</div>;
  };

  return (
    <div>
      <div
        ref={screenRef}
        id="screen"
        className={state}
        onClick={handleOnClick}
      >
        {ment}
      </div>
      <div>{renderAvg()}</div>
      <div>{JSON.stringify(timeLogger, null, 2)}</div>
    </div>
  );
};

export default RC;
