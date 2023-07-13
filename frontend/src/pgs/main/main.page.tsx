"use client";
import React from "react";
import { Container } from "@/shared/ui/container/Container";
import { CampusAndCabinet } from "@/widgets/campusAndCabinet";
import { CabinetSearch } from "@/features/cabinet";
import { useStore } from "effector-react";
import { $campusStore } from "@/entities/campus/model";
import { Introduction } from "@/widgets/introduction";

const MainPage = () => {
  const campus = useStore($campusStore);
  return (
    <Container className='flex flex-col gap-8'>
      <CabinetSearch />
      {campus ? <CampusAndCabinet /> : <Introduction />}
    </Container>
  );
};

export default MainPage;
