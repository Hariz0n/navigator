import React from 'react';

type vector = {
  x: number,
  y: number
}
interface IProp {
  start: vector
  end: vector
}

const Line = ({start, end}: IProp) => {
  return (
    <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} style={{
      stroke: 'red',
      strokeWidth: 5
    }} />
  );
};

export default Line;