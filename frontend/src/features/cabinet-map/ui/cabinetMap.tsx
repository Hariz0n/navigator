import React, {useState} from 'react';
import {useStore} from "effector-react";
import {$campusStore} from "@/entities/cabinet/model";
import Map from "@/entities/map/ui/map";
import classNames from "classnames";
import Line from "@/entities/map/ui/line";
import {CampusFloorSelect} from "@/features/cabinet-floor-select/ui/campusFloorSelect";

interface IProps {
  className?: string
}

const CabinetMap = (props: IProps) => {
  const cabinetData = useStore($campusStore)!
  const [floor, setFloor] = useState(1);
  const vectors = cabinetData.floors.find(el => el.value === floor)!.vectors
  const lines: React.JSX.Element[] = []
  for (let i = 1; i < vectors.length; i++) {
    lines.push(
      <Line key={i} start={{x: vectors[i-1].x, y: vectors[i-1].y}} end={{x: vectors[i].x, y: vectors[i].y}} />
    )
  }
  return (
    <div className={classNames('relative p-10 rounded-3xl border', props.className)}>
      <Map campusId={cabinetData.campusID} floor={floor}>
        {lines}
      </Map>
      <CampusFloorSelect setFloor={setFloor} floors={cabinetData.floors.map(el => el.value)}/>
    </div>
  );
};

export default CabinetMap;