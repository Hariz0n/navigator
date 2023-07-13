import React, { FC } from "react";

interface IProps {
  x: number,
  y: number,
  value: number
}

export const Stairs: FC<IProps> = ({x, y, value}) => {
  return <g>
    <circle cx={x} cy={y} r={50} strokeWidth={3} stroke="#3ac203" fill="#3aa223"/>
    <text x={x-17} y={y+20} fill="white" style={{
      fontSize: "4rem",
    }} >{value}</text>
  </g>;
};
