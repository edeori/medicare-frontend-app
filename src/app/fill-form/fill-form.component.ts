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
import { PatientDataDTO } from '../models/patient-data-dto';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../components/dialog/confirmation-dialog';
import { EnumToArrayPipe } from '../components/pipes/enum-to-array.pipe';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {

  public helathStatusForm: FormGroup;
  public genderEnum = GenderEnum;
  public relationshipStatusEnum = RelationshipStatusEnum;
  public jobTypeEnum = JobTypeEnum;
  public jobActivityEnum = JobActivityEnum;
  public livingLocationEnum = LivingLocationEnum;
  public raceEnum = RaceEnum;
  public eatingEnum = EatingEnum;
  public dietEnum = DietEnum;
  public alcoholRegularityEnum = AlcoholRegularityEnum;

  constructor(private _fb: FormBuilder, private fillFormService: FillFormService, public dialog: MatDialog) {
    this.helathStatusForm = this._fb.group({
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      relationshipStatus: ['', [Validators.required]],
      doHaveKids: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      jobActivity: ['', [Validators.required]],
      livingLocation: ['', [Validators.required]],
      race: ['', [Validators.required]],

      averageSleepTime: ['', [Validators.required]],
      onScreenTime: ['', [Validators.required]],

      averageStressLevel: ['', [Validators.required]],

      regularEating: ['', [Validators.required]],
      mealsPerDay: ['', [Validators.required]],
      eating: ['', [Validators.required]],
      diet: ['', [Validators.required]],
      alcoholRegularity: ['', [Validators.required]],

      doSmoke: ['', [Validators.required]],
      doUseDrugs: ['', [Validators.required]],
      doHaveGlasses: ['', [Validators.required]],
      doHavePet: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.fillFormService.getPatientData().subscribe(
      data => {
        console.log(data);

        this.helathStatusForm.setValue({
          gender: data.gender,
          dateOfBirth: data.dateOfBirth,
          weight: data.weight,
          height: data.height,
          relationshipStatus: data.relationshipStatus,
          doHaveKids: data.doHaveKids,
          jobType: data.jobType,
          jobActivity: data.jobActivity,
          livingLocation: data.livingLocation,
          race: data.race,

          averageSleepTime: data.averageSleepTime,
          onScreenTime: data.onScreenTime,

          averageStressLevel: data.averageStressLevel,

          regularEating: data.regularEating,
          mealsPerDay: data.mealsPerDay,
          eating: data.eating,
          diet: data.diet,
          alcoholRegularity: data.alcoholRegularity,

          doSmoke: data.doSmoke,
          doUseDrugs: data.doUseDrugs,
          doHaveGlasses: data.doHaveGlasses,
          doHavePet: data.doHavePet,
        });
      },
      error => {
        console.log('Not filled yet.');
      }
    );
  }

  formatLabel(value: number) {
    return Math.round(value * 10) + '%';
  }

  submitForm() {
    if (this.helathStatusForm.valid) {

      let data: PatientDataDTO = {
        ...this.helathStatusForm.value
      };

      console.log(data);

      this.fillFormService.create(data).subscribe(res => {
        //dosmthing
        console.log(res);
        this.dialog.open(ConfirmationDialog, {
          width: '250px',
          data: { title: 'Submitted', text: 'OK' },
        })
      });
    } else {
      this.dialog.open(ConfirmationDialog, {
        width: '250px',
        data: { title: 'Validation Error', text: 'Please fill form correctly' },
      })
    }
  }

}
