import React, {FC} from 'react';
import classNames from "classnames";

interface IProps {
  className?: string,
  children: React.ReactNode
}

export const WhiteCard: FC<IProps> = ({className, children}) => {
  return (
    <div className={classNames("bg-white rounded-3xl p-5 shadow flex flex-col gap-4", className)}>
      {children}
    </div>
  );
};
