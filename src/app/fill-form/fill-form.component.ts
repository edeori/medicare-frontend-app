import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderEnum, GenderEnumMap } from '../models/gender.enum';
import { RelationshipStatusEnum, RelationshipStatusEnumMap } from '../models/relationship-status.enum';
import { JobTypeEnum, JobTypeEnumMap } from '../models/jobtype.enum';
import { JobActivityEnum, JobActivityEnumMap } from '../models/job-activity.enum';
import { LivingLocationEnum, LivingLocationEnumMap } from '../models/living-location.enum';
import { RaceEnum, RaceEnumMap } from '../models/race.enum';
import { EatingEnum, EatingEnumMap } from '../models/eating.enum';
import { DietEnum, DietEnumMap } from '../models/diet.enum';
import { AlcoholRegularityEnum, AlcoholRegularityEnumMap } from '../models/alcohol-regularity.enum';
import { FillFormService } from '../_services/fill-form-service';
import { PatientDataDTO } from '../models/patient-data-dto';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../components/dialog/confirmation-dialog';
import { IllnessCategoryEnum, IllnessCategoryEnumMap } from '../models/illness-category.enum';
import { SportActivityEnumMap } from '../models/sport-activity.enum';

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
  public illnessCategoryEnum = IllnessCategoryEnum;

  constructor(private _fb: FormBuilder, private fillFormService: FillFormService, public dialog: MatDialog) {
    this.helathStatusForm = this._fb.group({
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      relationshipStatus: ['', [Validators.required]],
      doHaveKids: '',
      jobType: ['', [Validators.required]],
      jobActivity: ['', [Validators.required]],
      livingLocation: ['', [Validators.required]],
      race: ['', [Validators.required]],

      averageSleepTime: ['', [Validators.required]],
      onScreenTime: ['', [Validators.required]],

      averageStressLevel: ['', [Validators.required]],

      regularEating: '',
      mealsPerDay: ['', [Validators.required]],
      eating: ['', [Validators.required]],
      diet: ['', [Validators.required]],
      alcoholRegularity: ['', [Validators.required]],

      doSmoke: '',
      doUseDrugs: '',
      doHaveGlasses: '',
      doHavePet: '',

      activeSportActivities: '',
      postSportActivities: '',

      knownIllnesses: '',
      ancestorIllnesses: '',
      ancestorDeathCauses: '',
    });
  }

  ngOnInit(): void {
    this.fillFormService.getPatientData().subscribe(
      data => {
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

          activeSportActivities: data.activeSportActivities,
          postSportActivities: data.postSportActivities,

          knownIllnesses: data.knownIllnesses,
          ancestorIllnesses: data.ancestorIllnesses,
          ancestorDeathCauses: data.ancestorDeathCauses,
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

  onCheckChange(event: any) {
    const formArray: FormArray = this.helathStatusForm.get('illnessCategoryList') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach(ctrl => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  submitForm() {
    if (this.helathStatusForm.valid) {

      let data: PatientDataDTO = {
        ...this.helathStatusForm.value,
        gender: GenderEnumMap.get(this.helathStatusForm.get('gender')?.value),
        relationshipStatus: RelationshipStatusEnumMap.get(this.helathStatusForm.get('relationshipStatus')?.value),
        jobType: JobTypeEnumMap.get(this.helathStatusForm.get('jobType')?.value),
        jobActivity: JobActivityEnumMap.get(this.helathStatusForm.get('jobActivity')?.value),
        livingLocation: LivingLocationEnumMap.get(this.helathStatusForm.get('livingLocation')?.value),
        race: RaceEnumMap.get(this.helathStatusForm.get('race')?.value),
        eating: EatingEnumMap.get(this.helathStatusForm.get('eating')?.value),
        diet: DietEnumMap.get(this.helathStatusForm.get('diet')?.value),
        alcoholRegularity: AlcoholRegularityEnumMap.get(this.helathStatusForm.get('alcoholRegularity')?.value),

        activeSportActivities: this.helathStatusForm.get('activeSportActivities')?.value.map((x: string) => SportActivityEnumMap.get(x)),
        postSportActivities: this.helathStatusForm.get('postSportActivities')?.value.map((x: string) => SportActivityEnumMap.get(x)),

        knownIllnesses: this.helathStatusForm.get('knownIllnesses')?.value.map((x: string) => IllnessCategoryEnumMap.get(x)),
        ancestorIllnesses: this.helathStatusForm.get('ancestorIllnesses')?.value.map((x: string) => IllnessCategoryEnumMap.get(x)),
        ancestorDeathCauses: this.helathStatusForm.get('ancestorDeathCauses')?.value.map((x: string) => IllnessCategoryEnumMap.get(x)),
      };

      console.log(data);

      this.fillFormService.create(data).subscribe(res => {
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
