import React from 'react';
import classNames from "classnames";

interface IProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  className?: string;
  name: string
}

const Input = (props: IProps) => {
  return (
    <input
      onChange={event => props.onChange(event)}
      placeholder={props.placeholder}
      type="text"
      name={props.name}
      id={props.id}
      className={classNames("rounded-3xl border py-2 px-4 focus:border-orange focus-visible:border-orange active:border-orange", props.className)}
    />
  );
};

export default Input;