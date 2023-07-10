"use client";
import { createPortal } from "react-dom";
import React, { useLayoutEffect, useState } from "react";

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface IProps {
  children: React.ReactNode;
  wrapperId: string;
}

export const Portal = (props: IProps) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let el = document.getElementById(props.wrapperId) as HTMLDivElement | null;
    let systemCreated = false;
    if (!el) {
      systemCreated = true;
      el = createWrapperAndAppendToBody(props.wrapperId);
    }
    setWrapper(el);

    return () => {
      if (systemCreated && el?.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, [props.wrapperId]);

  if (wrapper === null) return null;

  return createPortal(props.children, document.body);
};
