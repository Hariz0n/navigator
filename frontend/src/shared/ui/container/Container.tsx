import React from 'react';
import classNames from "classnames";

interface IProps {
  children?: React.ReactNode,
  className?: string
}

export const Container = ({children, className}: IProps) => {
  return (
    <div className={classNames("container mx-auto px-4", className)}>
      {children}
    </div>
  );
};
