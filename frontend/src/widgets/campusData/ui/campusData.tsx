import React from 'react';
import {useStore} from "effector-react";
import {$campusStore, campusActions} from "@/entities/cabinet/model";
import classNames from "classnames";
import CabinetMap from "@/features/cabinet-map/ui/cabinetMap";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

export const CampusData = () => {
  const campusStore = useStore($campusStore)
  const pending = useStore(campusActions.fetchCampusDataFx.pending)

  if (campusStore === null && pending) {
    return (
      <section className={classNames('grid sm:grid-cols-2 gap-8')}>
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
    <section className={classNames('grid sm:grid-cols-2 gap-8')}>
      <CabinetMap/>
      <div className="p-1 flex flex-col gap-2 col-span-1">
        <h2 className="text-3xl font-bold">Кампус: {campusStore.campusName}</h2>
        <address className="text-2xl italic">Адрес: 'node'</address>
        <p>{campusStore.description}</p>
      </div>
      <YMaps>
        <Map className="w-full h-60 shadow rounded-3xl overflow-hidden col-span-1" state={{center: campusStore.address, zoom: 17}}></Map>
      </YMaps>
    </section>
  );
};
