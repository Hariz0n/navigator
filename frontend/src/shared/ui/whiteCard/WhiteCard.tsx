import React, { FC } from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const WhiteCard: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-4 rounded-3xl bg-white p-5 shadow",
        className
      )}
    >
      {children}
    </div>
  );
};
