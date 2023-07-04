import React from 'react';
import classNames from "classnames";

interface IProps {
  children?: React.ReactNode,
  className?: string
}

const Container = ({children, className}: IProps) => {
  return (
    <div className={classNames("container mx-auto px-0", className)}>
      {children}
    </div>
  );
};

export default Container;