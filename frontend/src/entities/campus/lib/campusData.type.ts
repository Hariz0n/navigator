import { campusID } from "@/entities/campus/lib/campus.type";
import { flour } from "@/entities/campus/lib/floor.type";

export type campusData = {
  campusID: campusID;
  campusName: string;
  addressCampus: {
    x: number;
    y: number;
  };
  cabinet: {
    numberCabinet: string;
    descriptionCabinet: string;
    floors: flour[];
    steps: string[];
  };
  descriptionCampus: string;
};
