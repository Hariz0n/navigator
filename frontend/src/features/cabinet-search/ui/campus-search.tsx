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
    <form className={classNames("flex gap-6", props.className)} onSubmit={event => {
      event.preventDefault()
      campusActions.fetchCampusDataFx(campusName)
    }}>
      <Input
        onChange={(e) => setCampusName(e.target.value)}
        name="campusName"
        placeholder='Введите название кабинета'
        className="flex-grow"
      />
      <Button isSecondary={false} type="submit">Поиск</Button>
      <Button isSecondary={true} type="reset" onClick={() => {campusActions.clearCampusData()}}>Сброс</Button>
    </form>
  );
};
