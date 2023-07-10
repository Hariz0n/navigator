import React from 'react';
import {Container} from "@/shared/ui/container/Container";

export const Header = () => {
  return (
    <header className="h-20 bg-grays flex items-center flex-shrink-0 top-0 sticky z-50">
      <Container className="flex justify-center items-center">
        <h1 className="text-white font-bold text-5xl">Навигатор</h1>
      </Container>
    </header>
  );
};
