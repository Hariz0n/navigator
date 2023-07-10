import React from "react";

type vector = {
  x: number;
  y: number;
};
interface IProp {
  start: vector;
  end: vector;
}

export const Line = ({ start, end }: IProp) => {
  return (
    <line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      style={{
        strokeWidth: 15,
        strokeLinecap: "round",
      }}
      className='animate-pulse stroke-lime'
    />
  );
};
