import React from 'react';
import classNames from "classnames";

interface IProps {
  onClick?: () => void;
  className?: string;
  isSecondary: boolean
  type: 'button' | 'submit' | 'reset' | undefined
  children: React.ReactNode
}

export const Button = (props: IProps) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classNames(
        "border-orange font-bold py-2 px-4 rounded-3xl transition-all border",
        !props.isSecondary ? "bg-orange text-white hover:bg-white hover:text-orange" : "bg-white text-orange hover:bg-orange hover:text-white",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
