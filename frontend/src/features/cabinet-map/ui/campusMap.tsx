import React, {useRef, useState} from 'react';
import {useStore} from "effector-react";
import {$campusStore} from "@/entities/cabinet/model";
import Map from "@/entities/map/ui/map";
import Line from "@/entities/map/ui/line";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

interface IProps {
  className?: string
}

const CampusMap = (props: IProps) => {
  const cabinetData = useStore($campusStore)!
  const [floor, setFloor] = useState(1);
  const vectors = cabinetData.floors.find(el => el.value === floor)!.vectors
  const svgs: React.JSX.Element[] = []
  for (let i = 1; i < vectors.length; i++) {
    svgs.push(
      <Line key={i} start={{x: vectors[i-1].x, y: vectors[i-1].y}} end={{x: vectors[i].x, y: vectors[i].y}} />
    )
  }
  return (
     <div className='relative col-span-1 row-span-2 w-auto h-auto shadow-xl rounded-3xl overflow-hidden'>
       <TransformWrapper
         minScale={0.95}
         onInit={ref => {
           ref.zoomToElement('path')
         }}
       >
         {({zoomToElement} ) => (
           <>
             <div className="flex flex-col border overflow-hidden rounded absolute z-20 top-5 right-5">
               {cabinetData.floors.map(el => el.value).map(value => {
                 return <button onClick={() => {
                   setFloor(value)
                   setTimeout(() => {
                     zoomToElement('path')
                   }, 300)
                 }} key={value} className={
                   "border-0 border-b last:border-b-0 px-3 py-1 bg-body-back hover:bg-grays hover:text-white transition" +
                   (floor === value ? ' bg-grays text-white' : '')
                 }>{value}</button>
               })}
             </div>
             <TransformComponent wrapperClass="">
               <Map campusId={cabinetData.campusID} floor={floor}>
                 <g id='path' className='m-5'>
                   {svgs}
                 </g>
               </Map>
             </TransformComponent>
           </>
         )}
       </TransformWrapper>
     </div>
  );
};

export default CampusMap;