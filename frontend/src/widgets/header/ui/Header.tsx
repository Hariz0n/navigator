import React from "react";
import { Container } from "@/shared/ui/container/Container";

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex h-20 flex-shrink-0 items-center bg-grays'>
      <Container className='flex items-center justify-center'>
        <h1 className='select-none text-5xl font-bold text-white'>Навигатор</h1>
      </Container>
    </header>
  );
};
