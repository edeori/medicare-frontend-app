import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderEnum, GenderEnumMap, GenderEnumReMap } from '../models/gender.enum';
import { RelationshipStatusEnum, RelationshipStatusEnumMap, RelationshipStatusEnumReMap } from '../models/relationship-status.enum';
import { JobTypeEnum, JobTypeEnumMap, JobTypeEnumReMap } from '../models/jobtype.enum';
import { JobActivityEnum, JobActivityEnumMap, JobActivityEnumReMap } from '../models/job-activity.enum';
import { LivingLocationEnum, LivingLocationEnumMap, LivingLocationEnumReMap } from '../models/living-location.enum';
import { RaceEnum, RaceEnumMap, RaceEnumReMap } from '../models/race.enum';
import { EatingEnum, EatingEnumMap, EatingEnumReMap } from '../models/eating.enum';
import { DietEnum, DietEnumMap, DietEnumReMap } from '../models/diet.enum';
import { AlcoholRegularityEnum, AlcoholRegularityEnumMap, AlcoholRegularityEnumReMap } from '../models/alcohol-regularity.enum';
import { FillFormService } from '../_services/fill-form-service';
import { PatientDataDTO } from '../models/patient-data-dto';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../components/dialog/confirmation-dialog';
import { IllnessCategoryEnum, IllnessCategoryEnumMap, IllnessCategoryEnumReMap } from '../models/illness-category.enum';
import { SportActivityEnum, SportActivityEnumMap, SportActivityEnumReMap } from '../models/sport-activity.enum';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  public sportActivityEnum = SportActivityEnum;

  activeSportActivities = Object.values(SportActivityEnum).map(item => String(item));
  postSportActivities = Object.values(SportActivityEnum).map(item => String(item));
  knownIllnesses = Object.values(IllnessCategoryEnum).map(item => String(item));
  ancestorIllnesses = Object.values(IllnessCategoryEnum).map(item => String(item));
  ancestorDeathCauses = Object.values(IllnessCategoryEnum).map(item => String(item));

  activeSportActivitiesAdded: string[] = [];
  postSportActivitiesAdded: string[] = [];
  knownIllnessesAdded: string[] = [];
  ancestorIllnessesAdded: string[] = [];
  ancestorDeathCausesAdded: string[] = [];

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

      activeSportActivities: new FormArray([]),
      postSportActivities: new FormArray([]),

      knownIllnesses: new FormArray([]),
      ancestorIllnesses: new FormArray([]),
      ancestorDeathCauses: new FormArray([]),
    });

    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(): void {
    this.fillFormService.getPatientData().subscribe(
      data => {
        console.log(data);
        this.helathStatusForm.patchValue({

          gender: GenderEnumReMap.get(data.gender),
          dateOfBirth: data.dateOfBirth,
          weight: data.weight,
          height: data.height,
          relationshipStatus: RelationshipStatusEnumReMap.get(data.relationshipStatus),
          doHaveKids: data.doHaveKids,
          jobType: JobTypeEnumReMap.get(data.jobType),
          jobActivity: JobActivityEnumReMap.get(data.jobActivity),
          livingLocation: LivingLocationEnumReMap.get(data.livingLocation),
          race: RaceEnumReMap.get(data.race),

          averageSleepTime: data.averageSleepTime,
          onScreenTime: data.onScreenTime,

          averageStressLevel: data.averageStressLevel,

          regularEating: data.regularEating,
          mealsPerDay: data.mealsPerDay,
          eating: EatingEnumReMap.get(data.eating),
          diet: DietEnumReMap.get(data.diet),
          alcoholRegularity: AlcoholRegularityEnumReMap.get(data.alcoholRegularity),

          doSmoke: data.doSmoke,
          doUseDrugs: data.doUseDrugs,
          doHaveGlasses: data.doHaveGlasses,
          doHavePet: data.doHavePet,
        });

        this.activeSportActivitiesAdded = data.activeSportActivities.map((x: string) => SportActivityEnumReMap.get(x)) as [];
        this.postSportActivitiesAdded = data.postSportActivities.map((x: string) => SportActivityEnumReMap.get(x)) as [];
        this.knownIllnessesAdded = data.knownIllnesses.map((x: string) => IllnessCategoryEnumReMap.get(x)) as [];
        this.ancestorIllnessesAdded = data.ancestorIllnesses.map((x: string) => IllnessCategoryEnumReMap.get(x)) as [];
        this.ancestorDeathCausesAdded = data.ancestorDeathCauses.map((x: string) => IllnessCategoryEnumReMap.get(x)) as [];

      },
      error => {
        console.log('Not filled yet.');
      }
    );
  }

  formatLabel(value: number) {
    return Math.round(value * 10) + '%';
  }

  makeArrayOfFormControls(enums: any, type: string) {
    const formArray: FormArray = this.helathStatusForm.get(type) as FormArray;

    enums.forEach((element: any) => {
      formArray.push(new FormControl(element));
    });
  }

  onCheckChange(event: any, type: string) {
    const formArray: FormArray = this.helathStatusForm.get(type) as FormArray;

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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  submitForm() {
    if (this.helathStatusForm.valid) {

      console.log(this.activeSportActivitiesAdded);
      console.log(this.postSportActivitiesAdded);

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

        activeSportActivities: this.activeSportActivitiesAdded.map((x: string) => SportActivityEnumMap.get(x)),
        postSportActivities: this.postSportActivitiesAdded.map((x: string) => SportActivityEnumMap.get(x)),

        knownIllnesses: this.knownIllnessesAdded.map((x: string) => IllnessCategoryEnumMap.get(x)),
        ancestorIllnesses: this.ancestorIllnessesAdded.map((x: string) => IllnessCategoryEnumMap.get(x)),
        ancestorDeathCauses: this.ancestorDeathCausesAdded.map((x: string) => IllnessCategoryEnumMap.get(x)),
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
