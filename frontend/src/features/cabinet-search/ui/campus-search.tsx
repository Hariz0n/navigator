"use client"
import React, {useState} from 'react';
import Input from "@/shared/ui/input/input";
import {useStore} from "effector-react";
import {$campusStore, campusActions} from "@/entities/cabinet/model";
import Button from "@/shared/ui/button/button";
import classNames from "classnames";

interface IProps {
  className?: string
}

export const CampusSearch = (props: IProps) => {
  const [campusName, setCampusName] = useState<string>('');
  const campusStore = useStore($campusStore)
  return (
    <form className={classNames("flex flex-wrap gap-2 sm:gap-6", props.className)} onSubmit={event => {
      event.preventDefault()
      campusActions.fetchCampusDataFx(campusName)
    }}>
      <Input
        onChange={(e) => setCampusName(e.target.value)}
        name="campusName"
        placeholder='Введите название кабинета'
        className="flex-grow"
      />
      <div className="flex gap-6 flex-grow w-full sm:w-auto sm:flex-grow-0 ">
        <Button className='flex-grow sm:flex-grow-0' isSecondary={false} type="submit">Поиск</Button>
        <Button className='' isSecondary={true} type="reset" onClick={() => {campusActions.clearCampusData()}}>Сброс</Button>
      </div>
    </form>
  );
};
