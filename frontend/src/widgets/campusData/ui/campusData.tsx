import React from 'react';
import {useStore} from "effector-react";
import {$campusStore, campusActions} from "@/entities/cabinet/model";
import classNames from "classnames";
import CabinetMap from "@/features/cabinet-map/ui/cabinetMap";
import {Map, YMaps} from "@pbe/react-yandex-maps";

export const CampusData = () => {
  const campusStore = useStore($campusStore)
  const pending = useStore(campusActions.fetchCampusDataFx.pending)

  if (campusStore === null && pending) {
    return (
      <section className={classNames('grid grid-cols-2 gap-8')}>
        <div className="bg-grey w-2/5 h-40">
        </div>
      </section>
    )
  }

  if (campusStore === null) {
    return (
      <div>Для поиска кабинета введите его название</div>
    )
  }

  return (
    <section className={classNames('grid grid-cols-2 gap-8')}>
      <YMaps>
        <Map className="w-full h-60 shadow rounded-3xl overflow-hidden" state={{center: campusStore.address, zoom: 17}}></Map>
      </YMaps>
      <div className="p-2 flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Кампус: {campusStore.campusName}</h2>
        <address className="text-2xl italic">Адрес: {campusStore.address}</address>
        <p>{campusStore.description}</p>
      </div>
      <CabinetMap className="col-span-2"/>
    </section>
  );
};
