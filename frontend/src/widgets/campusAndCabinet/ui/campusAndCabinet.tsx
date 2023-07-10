import React from "react";
import classNames from "classnames";
import { CampusInfo, YandexMap } from "@/entities/campus";
import { useStore } from "effector-react";
import { $campusStore } from "@/entities/campus/model";
import { Steps } from "@/entities/cabinet";
import { WhiteCard } from "@/shared/ui/whiteCard/WhiteCard";
import { CampusMap } from "@/features/campus";

export const CampusAndCabinet = () => {
  const campusStore = useStore($campusStore);
  if (!campusStore) {
    return null;
  }
  const {
    campusName,
    addressCampus,
    descriptionCampus,
    campusID,
    cabinet: { numberCabinet, floors },
  } = campusStore;
  return (
    <section
      className={classNames(
        "grid grid-rows-3 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2"
      )}
    >
      <CampusMap
        className='row-span-3 sm:col-span-2 lg:row-span-2 2xl:col-span-1 2xl:row-span-3'
        floors={floors}
        campusId={campusID}
      />
      <WhiteCard>
        <CampusInfo
          name={campusName}
          description={descriptionCampus}
          address={addressCampus.x.toString()}
        />
      </WhiteCard>
      <WhiteCard>
        <Steps
          cabinetName={numberCabinet}
          stepsList={campusStore.cabinet.floors.map((fl) => fl.descriptionStep)}
        />
      </WhiteCard>
      <YandexMap
        className='sm:col-span-2 lg:col-span-3 2xl:col-span-1'
        x={addressCampus.x}
        y={addressCampus.y}
      />
    </section>
  );
};
