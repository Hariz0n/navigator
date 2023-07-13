import React, { FC, useEffect, useState } from "react";

interface IProps {
  name: string;
  description: string;
  address: {
    x: number;
    y: number;
  };
}

export const Info: FC<IProps> = ({ name, description, address }) => {
  const [addressFull, setAddressFull] = useState<string | null>(null);
  console.log(address);
  useEffect(() => {
    fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.NEXT_PUBLIC_YAPI_KEY}&geocode=${address.y},${address.x}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(
          data.response.GeoObjectCollection.metaDataProperty
            .GeocoderResponseMetaData
        );
        if (
          +data.response.GeoObjectCollection.metaDataProperty
            .GeocoderResponseMetaData.found === 0
        ) {
          throw new Error("not found");
        }
        return data;
      })
      .catch(() => {
        setAddressFull("не найден");
      })
      .then((data) => {
        const geoObject =
          data.response.GeoObjectCollection.featureMember[0].GeoObject;
        setAddressFull(geoObject.description + " " + geoObject.name);
      });
  }, [address.x, address.y]);
  return (
    <div className='col-span-1 flex flex-col gap-2 p-1'>
      <h3 className='text-3xl font-bold'>Кампус: {name}</h3>
      {addressFull ? (
        <address className='text-2xl italic'>Адрес: {addressFull}</address>
      ) : (
        <div className='flex flex-col gap-0.5'>
          <div className='h-8 w-full animate-pulse rounded-2xl bg-lightgray'></div>
          <div className='h-8 w-2/3 animate-pulse rounded-2xl bg-lightgray'></div>
        </div>
      )}
      <p className='text-lg'>{description}</p>
    </div>
  );
};
