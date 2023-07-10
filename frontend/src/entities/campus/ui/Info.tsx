import React, {FC} from 'react';

interface IProps {
  name: string,
  description: string,
  address: string
}

export const Info: FC<IProps> = ({name, description, address}) => {
  return (
    <div className="p-1 flex flex-col gap-2 col-span-1">
      <h3 className="text-3xl font-bold">Кампус: {name}</h3>
      <address className="text-2xl italic">Адрес: очень длинный адресс {address}</address>
      <p className="text-lg">{description}</p>
    </div>
  );
};