import * as React from "react";
import { useEffect, useState, useRef } from "react";

const RSPCoord = {
  R: "0",
  S: "-142px",
  P: "-284px",
} as const;

type ImageCoord = typeof RSPCoord[keyof typeof RSPCoord];

const MyRSP = () => {
  const [imgCoord, setImgCoord] = useState<ImageCoord>("-142px");
  const timerRef = useRef<number>();
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      changeHand();
    }, 200);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    console.log(Object.keys(RSPCoord));
    setImgCoord(
      RSPCoord[
        Object.keys(RSPCoord)[
          Math.floor(Math.random() * 3)
        ] as keyof typeof RSPCoord
      ]
    );
  };

  return (
    <div>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
    </div>
  );
};

export default MyRSP;
