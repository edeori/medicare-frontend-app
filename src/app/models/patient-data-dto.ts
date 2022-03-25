import { AlcoholRegularityEnum } from "./alcohol-regularity.enum";
import { DietEnum } from "./diet.enum";
import { EatingEnum } from "./eating.enum";
import { GenderEnum } from "./gender.enum";
import { IllnessCategoryEnum } from "./illness-category.enum";
import { JobActivityEnum } from "./job-activity.enum";
import { JobTypeEnum } from "./jobtype.enum";
import { LivingLocationEnum } from "./living-location.enum";
import { RaceEnum } from "./race.enum";
import { RelationshipStatusEnum } from "./relationship-status.enum";
import { SportActivityEnum } from "./sport-activity.enum";

export interface PatientDataDTO {
  gender: GenderEnum;
  dateOfBirth: string;
  weight: number;
  height: number;
  relationshipStatus: RelationshipStatusEnum;
  doHaveKids: boolean;
  jobType: JobTypeEnum;
  jobActivity: JobActivityEnum;
  livingLocation: LivingLocationEnum;
  race: RaceEnum;

  averageSleepTime: number;
  onScreenTime: number;
  
  averageStressLevel: number;

  regularEating: boolean;
  mealsPerDay: number;
  eating: EatingEnum;
  diet: DietEnum;
  alcoholRegularity: AlcoholRegularityEnum;
  
  doSmoke: boolean;
  doUseDrugs: boolean;
  doHaveGlasses: boolean;
  doHavePet: boolean;

  activeSportActivities: SportActivityEnum[];
  postSportActivities: SportActivityEnum[];

  knownIllnesses: IllnessCategoryEnum[];
  ancestorIllnesses: IllnessCategoryEnum[];
  ancestorDeathCauses: IllnessCategoryEnum[];
}