import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from '../models/gender.enum';
import { RelationshipStatusEnum } from '../models/relationship-status.enum';
import { JobTypeEnum } from '../models/jobtype.enum';
import { JobActivityEnum } from '../models/job-activity.enum';
import { LivingLocationEnum } from '../models/living-location.enum';
import { RaceEnum } from '../models/race.enum';
import { EatingEnum } from '../models/eating.enum';
import { DietEnum } from '../models/diet.enum';
import { AlcoholRegularityEnum } from '../models/alcohol-regularity.enum';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {

  public helathStatusForm: FormGroup;
  public genderEnum = Object.values(GenderEnum).map(item => String(item));
  public relationshipStatusEnum = Object.values(RelationshipStatusEnum).map(item => String(item));
  public jobTypeEnum = Object.values(JobTypeEnum).map(item => String(item));
  public jobActivityEnum = Object.values(JobActivityEnum).map(item => String(item));
  public livingLocationEnum = Object.values(LivingLocationEnum).map(item => String(item));
  public raceEnum = Object.values(RaceEnum).map(item => String(item));
  public eatingEnum = Object.values(EatingEnum).map(item => String(item));
  public dietEnum = Object.values(DietEnum).map(item => String(item));
  public alcoholRegularityEnum = Object.values(AlcoholRegularityEnum).map(item => String(item));

  constructor(private _fb: FormBuilder) {
    this.helathStatusForm = this._fb.group({
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      relationshipStatus: ['', [Validators.required]],
      doHaveKids: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      jobActivity: ['', [Validators.required]],
      livingLocation: ['', [Validators.required]],
      race: ['', [Validators.required]],
      averageSleepTime: ['', [Validators.required]],
      wakeUpTime: ['', [Validators.required]],
      onScreenTime: ['', [Validators.required]],
      averageStressLevel: ['', [Validators.required]],
      regularEating: ['', [Validators.required]],
      mealsPerDay: ['', [Validators.required]],
      eating: ['', [Validators.required]],
      diet: ['', [Validators.required]],
      alcoholRegularity: ['', [Validators.required]],
      isSmoking: ['', [Validators.required]],
      doUseDrugs: ['', [Validators.required]],
      doHaveGlasses: ['', [Validators.required]],
      doHavePet: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return Math.round(value * 10) + '%';
  }

  submitForm(){

  }

}
