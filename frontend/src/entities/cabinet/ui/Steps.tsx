import React, {FC} from 'react';

interface IProps {
  stepsList: string[],
  cabinetName: string
}

export const Steps: FC<IProps> = ({stepsList, cabinetName}) => {
  return (
    <>
      <h3 className="font-bold text-3xl">Как пройти в {cabinetName}</h3>
      <ul className="text-lg flex flex-col gap-1">
        {stepsList.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </>
  );
};
