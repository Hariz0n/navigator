"use client"
import React, {useEffect, useRef, useState} from 'react';
import Input from "@/shared/ui/input/input";
import {useStore} from "effector-react";
import {$campusStore, campusActions} from "../../../entities/campus/model";
import Button from "@/shared/ui/button/button";
import classNames from "classnames";
import Portal from "@/shared/ui/portal/Portal";
import {$cabinetsSearchStore, cabinetActions} from "@/entities/cabinet/model";

interface IProps {
  className?: string
}

export const CampusSearch = (props: IProps) => {
  const [campusName, setCampusName] = useState<string>('');
  const [isOpenDrop, setIsOpenDrop] = useState<boolean>(true);
  const formRef = useRef<HTMLInputElement>(null)
  const cabinets = useStore($cabinetsSearchStore)
  const isSearching = useStore(cabinetActions.fetchSearchCabinets.pending)

  useEffect(() => {
    const listener = (e: Event) => {
      setIsOpenDrop(false)
    }
    document.addEventListener('scroll', listener)
    const timeout = setTimeout(() => {
      if(campusName !== '') {
        cabinetActions.fetchSearchCabinets(campusName)
        setIsOpenDrop(true)
      } else {
        campusActions.clearCampusData()
      }
    }, 500)
    return () => {
      clearTimeout(timeout)
      setIsOpenDrop(false)
      document.removeEventListener('scroll', listener)
    }
  }, [campusName]);

  return (
    <div className={classNames("flex flex-wrap gap-2 sm:gap-6", props.className)}>
      <Input
        refData={formRef}
        onChange={(e) => setCampusName(e.target.value)}
        name="campusName"
        placeholder='Введите название кабинета'
        className="flex-grow"
      />
      <Button className='' isSecondary={true} type="reset" onClick={() => {campusActions.clearCampusData()}}>Сброс</Button>
      <Portal wrapperId="select">
        {isOpenDrop && formRef.current && cabinets !== null && (
          <ul className="rounded-3xl shadow-2xl overflow-hidden px-2 py-2 absolute bg-white z-50" style={{
            top: formRef.current.getBoundingClientRect().bottom + 10,
            left: formRef.current.getBoundingClientRect().left,
            width: formRef.current.offsetWidth
          }}>
            {!isSearching && cabinets?.length === 0 && (
              <li
                className="flex flex-col gap-0.5 px-2 py-1 rounded-2xl justify-center"
              >
                <h4 className="text-bold text-2xl cursor-pointer">Кабинеты не найдены</h4>
              </li>
            )}
            {!isSearching && cabinets?.length !== 0 && (
              cabinets.slice(0, 4).map(cabinet => (
                <li
                  className="flex flex-col gap-0.5 px-2 py-1 rounded-2xl  hover:bg-body-back transition-colors justify-center"
                  key={cabinet.id}
                  onClick={() => {
                    campusActions.fetchCampusDataFx(cabinet.id)
                    formRef.current!.value = cabinet.numberCabinet.toUpperCase()
                    setIsOpenDrop(false)
                  }}
                >
                  <h4 className="text-bold text-2xl cursor-pointer">{cabinet.numberCabinet.toUpperCase()}</h4>
                  <p className="text-sm">Cisco, компьютерный класс</p>
                </li>
              ))
            )}
          </ul>
        )}
      </Portal>
    </div>
  );
};
