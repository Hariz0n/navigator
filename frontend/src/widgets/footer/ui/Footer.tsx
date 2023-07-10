import React from 'react';
import {Container} from "@/shared/ui/container/Container";

export const Footer = () => {
  return (
    <footer className="h-20 bg-grays flex items-center flex-shrink-0">
      <Container className="flex justify-between items-center shrink-0">
        <div className="">
          <p className="text-white font-bold text-lg">Front-end: Петров Данила</p>
          <p className="text-white font-bold text-lg">Back-end: Сажин Егор</p>
        </div>
      </Container>
    </footer>
  );
};
