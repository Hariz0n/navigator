import React from "react";
import { WhiteCard } from "@/shared/ui";
import Image from "next/image";

export const Introduction = () => {
  return (
    <WhiteCard>
      <div className='flex flex-col items-start items-center gap-8 text-center lg:flex-row lg:text-left'>
        <Image
          src='/map.png'
          alt='logo'
          width={250}
          height={250}
          className='flex-shrink-0 flex-grow-0'
        />
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold'>Добро пожаловать</h1>
          <p className='text-lg'>
            Для поиска нужного кабинета просто введите его номер или название и
            выбирете нужный кабинет из предложенных
          </p>
          <p className='text-lg'>
            После выбора вам будет доступна информация кабинета, кампуса и карта
            того, как добраться до нужного кабинета
          </p>
        </div>
      </div>
    </WhiteCard>
  );
};
