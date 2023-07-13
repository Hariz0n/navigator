"use client";
import React, { FC, useCallback } from "react";
import { SearchSelect } from "@/shared/ui/searchSelect/SearchSelect";
import { useStore } from "effector-react";
import { $cabinetsSearchStore, cabinetActions } from "@/entities/cabinet";
import { campusActions } from "@/entities/campus/model";
import { Button } from "@/shared/ui/button/Button";
import classNames from "classnames";

interface IProps {
  className?: string;
}

export const CabinetSearch: FC<IProps> = ({ className }) => {
  const searchStore = useStore($cabinetsSearchStore);
  const onTextInputCallback = useCallback((value: string) => {
    if (!value) {
      campusActions.clearCampusData();
    } else {
      cabinetActions.fetchSearchCabinets(value);
    }
  }, []);
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className={classNames(
        "flex flex-wrap gap-4 rounded-3xl bg-white p-5 shadow",
        className
      )}
    >
      <SearchSelect
        name='cabs'
        selects={
          searchStore === null
            ? null
            : searchStore.map((el) => ({
                value: String(el.id),
                displayName: el.numberCabinet,
                alias: el.description,
              }))
        }
        onSelect={(id) => campusActions.fetchCampusDataFx(Number(id))}
        onTextInput={onTextInputCallback}
        className='flex-grow text-lg'
        placeholder='Введите название кабинета или его алиас'
      />
      <Button
        isSecondary={true}
        type='reset'
        onClick={() => {
          campusActions.clearCampusData();
          cabinetActions.clearSearchResults();
        }}
      >
        Сброс
      </Button>
    </form>
  );
};
