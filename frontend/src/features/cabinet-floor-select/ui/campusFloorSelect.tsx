import React from 'react';

interface IProps {
  floors: number[]
  setFloor: (num: number) => void
}

export const CampusFloorSelect = (props: IProps) => {
  return (
    <div className="flex flex-col border overflow-hidden rounded absolute top-5 left-5">
      {props.floors.map(value => {
        return <button onClick={() => props.setFloor(value)} key={value} className="border-0 border-b last:border-b-0 px-3 py-1 bg-body-back hover:bg-grays hover:text-white transition">{value}</button>
      })}
    </div>
  );
};
