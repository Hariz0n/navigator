import React, { FC } from "react";

interface IProps {
  stepsList: string[];
  cabinetName: string;
}

export const Steps: FC<IProps> = ({ stepsList, cabinetName }) => {
  return (
    <>
      <h3 className='text-3xl font-bold'>Как пройти в {cabinetName}</h3>
      <ul className='flex flex-col gap-1 text-lg'>
        {stepsList.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </>
  );
};
