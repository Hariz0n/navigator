import React from "react";
import { Container } from "@/shared/ui/container/Container";

export const Footer = () => {
  return (
    <footer className='flex h-20 flex-shrink-0 items-center bg-grays'>
      <Container className='flex shrink-0 items-center justify-between'>
        <div className=''>
          <p className='text-lg font-bold text-white'>
            Front-end: Петров Данила
          </p>
          <p className='text-lg font-bold text-white'>Back-end: Сажин Егор</p>
        </div>
      </Container>
    </footer>
  );
};
