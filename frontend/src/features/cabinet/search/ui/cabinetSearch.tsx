"use client"
import React, {useCallback} from 'react';
import {SearchSelect} from "@/shared/ui/searchSelect/SearchSelect";
import {useStore} from "effector-react";
import {$cabinetsSearchStore, cabinetActions} from "@/entities/cabinet";
import {campusActions} from "@/entities/campus/model";
import {Button} from "@/shared/ui/button/Button";

interface IProps {
  className?: string
}

export const CabinetSearch = (props: IProps) => {
  const searchStore = useStore($cabinetsSearchStore);
  const onTextInputCallback = useCallback((value: string) => {
    value && cabinetActions.fetchSearchCabinets(value)
  }, []);
  return (
    <form onSubmit={event => event.preventDefault()} className="bg-white rounded-3xl p-5 shadow flex gap-4 flex-wrap">
      <SearchSelect
        name="cabs"
        selects={searchStore === null ? null : searchStore.map(el => ({
          value: String(el.id),
          displayName: el.numberCabinet
        }))}
        onSelect={id => campusActions.fetchCampusDataFx(Number(id))}
        onTextInput={onTextInputCallback}
        className="text-lg flex-grow"
        placeholder="Введите название кабинета или его алиас"
      />
      <Button
        isSecondary={true}
        type="reset"
        onClick={() => {
          campusActions.clearCampusData()
          cabinetActions.clearSearchResults()
        }}
      >
        Сброс
      </Button>
    </form>
  );
};
