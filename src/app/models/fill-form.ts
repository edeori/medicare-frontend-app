import { AlcoholRegularityEnum } from "./alcohol-regularity.enum";
import { DietEnum } from "./diet.enum";
import { EatingEnum } from "./eating.enum";
import { GenderEnum } from "./gender.enum";
import { JobActivityEnum } from "./job-activity.enum";
import { JobTypeEnum } from "./jobtype.enum";
import { LivingLocationEnum } from "./living-location.enum";
import { RaceEnum } from "./race.enum";
import { RelationshipStatusEnum } from "./relationship-status.enum";

export interface FillForm {
    weight: number;
      height: number;
      gender: GenderEnum;
      dateOfBirth: string;
      relationshipStatus: RelationshipStatusEnum;
      doHaveKids: boolean;
      jobType: JobTypeEnum;
      jobActivity: JobActivityEnum;
      livingLocation: LivingLocationEnum;
      race: RaceEnum;
      averageSleepTime: number;
      wakeUpTime: number;
      onScreenTime: number;
      averageStressLevel: number;
      regularEating: boolean;
      mealsPerDay: number;
      eating: EatingEnum;
      diet: DietEnum;
      alcoholRegularity: AlcoholRegularityEnum;
      isSmoking: boolean;
      doUseDrugs: boolean;
      doHaveGlasses: boolean;
      doHavePet: boolean;
}