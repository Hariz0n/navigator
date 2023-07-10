import React, {FC} from 'react';
import {YMaps, Map} from "@pbe/react-yandex-maps";
import classNames from "classnames";

interface IProps {
  x: number,
  y: number,
  className?: string
}

export const YandexMap: FC<IProps> = ({x, y, className}) => {
  return (
    <YMaps query={{lang: 'ru_RU'}}>
      <Map className={classNames("w-full h-60 shadow rounded-3xl overflow-hidden col-span-1", className)} state={{center: [x, y], zoom: 17}}></Map>
    </YMaps>
  );
};
