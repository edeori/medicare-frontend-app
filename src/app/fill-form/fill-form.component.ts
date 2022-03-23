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
import { FillFormService } from '../_services/fill-form-service';
import { FillForm } from '../models/fill-form';

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

  constructor(private _fb: FormBuilder, private fillFormService: FillFormService) {
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
    let data: FillForm = {
      alcoholRegularity: this.helathStatusForm.get('alcoholRegularity')?.value,
      averageSleepTime: this.helathStatusForm.get('averageSleepTime')?.value,
      averageStressLevel: this.helathStatusForm.get('averageStressLevel')?.value,
      dateOfBirth: this.helathStatusForm.get('dateOfBirth')?.value,
      diet: this.helathStatusForm.get('diet')?.value,
      doHaveGlasses: this.helathStatusForm.get('doHaveGlasses')?.value,
      doHaveKids: this.helathStatusForm.get('doHaveKids')?.value,
      doHavePet: this.helathStatusForm.get('doHavePet')?.value,
      doUseDrugs: this.helathStatusForm.get('doUseDrugs')?.value,
      eating: this.helathStatusForm.get('eating')?.value,
      gender: this.helathStatusForm.get('gender')?.value,
      height: this.helathStatusForm.get('height')?.value,
      isSmoking: this.helathStatusForm.get('isSmoking')?.value,
      jobActivity: this.helathStatusForm.get('jobActivity')?.value,
      jobType: this.helathStatusForm.get('jobType')?.value,
      livingLocation: this.helathStatusForm.get('livingLocation')?.value,
      mealsPerDay: this.helathStatusForm.get('mealsPerDay')?.value,
      onScreenTime: this.helathStatusForm.get('onScreenTime')?.value,
      race: this.helathStatusForm.get('race')?.value,
      regularEating: this.helathStatusForm.get('regularEating')?.value,
      relationshipStatus: this.helathStatusForm.get('relationshipStatus')?.value,
      wakeUpTime: this.helathStatusForm.get('wakeUpTime')?.value,
      weight: this.helathStatusForm.get('weight')?.value
    };


    this.fillFormService.create(data).subscribe(res => {
      //dosmthing
      console.log(res);
    });
  }

}
