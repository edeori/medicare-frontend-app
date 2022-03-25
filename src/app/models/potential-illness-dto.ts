import { IllnessCategoryEnum } from "./illness-category.enum";

export interface PotentialIllnessDTO {
id: string;
percent: number;
illness: IllnessCategoryEnum;
}