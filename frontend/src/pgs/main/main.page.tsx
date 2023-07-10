"use client";
import React from "react";
import { Container } from "@/shared/ui/container/Container";
import { CampusAndCabinet } from "@/widgets/campusAndCabinet";
import { CabinetSearch } from "@/features/cabinet";

const MainPage = () => {
  return (
    <Container className='flex flex-col gap-8'>
      <CabinetSearch />
      <CampusAndCabinet />
    </Container>
  );
};

export default MainPage;
