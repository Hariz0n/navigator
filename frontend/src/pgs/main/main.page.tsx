"use client"
import React from 'react';
import Container from "@/shared/ui/container/container";
import Input from "@/shared/ui/input/input";
import {CampusSearch} from "@/features/cabinet-search";
import {useStore} from "effector-react";
import {$campusStore} from "../../entities/campus/model";
import {CampusData} from "@/widgets/campusData";

const MainPage = () => {
  return (
    <Container>
      <section className="bg-white rounded-3xl p-5 shadow flex flex-col gap-4">
        <CampusSearch/>
        <CampusData/>
      </section>
    </Container>
  );
};

export default MainPage