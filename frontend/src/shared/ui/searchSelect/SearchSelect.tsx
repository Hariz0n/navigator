import React, {FC, useEffect, useRef, useState} from 'react';
import {Input} from "@/shared/ui/input/Input";
import classNames from "classnames";
import {Portal} from "@/shared/ui/portal/Portal";

type selectItem = {
  value: string,
  displayName: string
}
interface IProps {
  name: string,
  className?: string,
  selects: selectItem[] | null,
  onSelect: (value: string) => void,
  onTextInput: (value: string) => void,
  placeholder?: string
}

export const SearchSelect: FC<IProps> = ({name: selectName, className, placeholder, selects, onSelect, onTextInput}) => {
  const [isOpenDrop, setIsOpenDrop] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue !== '') {
        setIsOpenDrop(true)
      }
      else {
        setIsOpenDrop(false)
      }
      onTextInput(inputValue)
    },500)
    const closeOnScroll = () => {
      setIsOpenDrop(false)
    }
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !isOpenDrop && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpenDrop(false)
      }
    }
    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('scroll', closeOnScroll)
    return () => {
      clearTimeout(timeout)
      setIsOpenDrop(false)
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('scroll', closeOnScroll)
    }
  }, [inputValue, onTextInput]);

  return (
    <>
      <Input placeholder={placeholder} refData={inputRef} className={classNames("", className)} onChange={e => setInputValue(e.target.value)} name={selectName}/>
      <Portal wrapperId="select">
        {isOpenDrop && inputRef.current && selects !== null && (
          <ul ref={dropdownRef} className="rounded-3xl shadow-2xl overflow-hidden px-2 py-2 absolute bg-white" style={{
            zIndex: 1000,
            top: inputRef.current.getBoundingClientRect().bottom + 10,
            left: inputRef.current.getBoundingClientRect().left,
            width: inputRef.current.offsetWidth
          }}>
            {selects && selects.length === 0 && (
              <li key={'not-found'}
                className="flex flex-col gap-0.5 px-2 py-1 rounded-2xl justify-center"
              >
                <h4 className="text-bold text-2xl cursor-pointer">Кабинеты не найдены</h4>
              </li>
            )}
            {selects && selects.length !== 0 && (
              selects.slice(0, 4).map(select => (
                <li
                  className="flex flex-col gap-0.5 px-2 py-1 rounded-2xl  hover:bg-body-back transition-colors justify-center"
                  key={select.displayName}
                  onClick={() => {
                    onSelect(select.value)
                    inputRef.current!.value = select.displayName.toUpperCase()
                    setIsOpenDrop(false)
                  }}
                >
                  <h4 className="text-bold text-2xl cursor-pointer">{select.displayName.toUpperCase()}</h4>
                  <p className="text-sm">Cisco, компьютерный класс</p>
                </li>
              ))
            )}
          </ul>
        )}
      </Portal>
    </>
  );
};
