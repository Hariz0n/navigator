import React, { FC, useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import classNames from "classnames";
import { flour } from "@/entities/campus/lib/floor.type";
import { campusID } from "@/entities/campus/lib/campus.type";
import { Line, Stairs } from "@/shared/ui";
import { Map } from "@/shared/ui";

interface IProps {
  className?: string;
  floors: flour[];
  campusId: campusID;
}

export const CampusMap: FC<IProps> = ({ className, floors, campusId }) => {
  const [floor, setFloor] = useState(floors[0].floor);
  const vectors = floors.find((fl) => fl.floor === floor)?.vectors || [];
  return (
    <div
      className={classNames(
        "relative h-auto w-auto overflow-hidden rounded-3xl bg-white shadow",
        className
      )}
    >
      <TransformWrapper
        limitToBounds={false}
        minScale={0.95}
        onInit={(ref) => {
          ref.zoomToElement("path");
        }}
      >
        {({ zoomToElement }) => (
          <>
            <div className='absolute right-5 top-5 z-20 flex flex-col overflow-hidden rounded border'>
              {floors
                .map((el) => el.floor)
                .map((value) => {
                  return (
                    <button
                      onClick={() => {
                        setFloor(value);
                        setTimeout(() => {
                          zoomToElement("path");
                        }, 300);
                      }}
                      key={value}
                      className={
                        "border-0 border-b bg-body-back px-3 py-1 transition last:border-b-0 hover:bg-grays hover:text-white" +
                        (floor === value ? " bg-grays text-white" : "")
                      }
                    >
                      {value}
                    </button>
                  );
                })}
            </div>
            <TransformComponent wrapperClass=''>
              <Map campusId={campusId} floor={floor}>
                <g id='path' className='m-5'>
                  {vectors.length ? vectors.map((vector, i, vectors) => {
                    if (!i) return;
                    return (
                      <Line
                        key={i}
                        start={{ x: vectors[i - 1].x, y: vectors[i - 1].y }}
                        end={{ x: vectors[i].x, y: vectors[i].y }}
                      />
                    );
                  }): (() => {
                    setFloor(1)
                    setTimeout(() => {
                      zoomToElement("path");
                    }, 300);
                    return null
                  })()}
                  {!!floors[floor] && (
                    <Stairs
                      key='stairs'
                      x={vectors[vectors.length - 1].x}
                      y={vectors[vectors.length - 1].y}
                      value={floors[floor].floor}
                    />
                  )}
                </g>
              </Map>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};
