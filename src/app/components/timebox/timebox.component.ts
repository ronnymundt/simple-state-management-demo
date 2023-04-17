import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ITimebox} from "../../interfaces";
import {TimeboxStoreService} from "../../services/timebox.service";

@Component({
  selector: 'bit-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.scss']
})
export class TimeboxComponent implements OnInit {
  @Input() timeBox!: ITimebox;

  timeBoxInputForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: TimeboxStoreService
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
    this.timeBoxInputForm.patchValue(this.timeBox);
  }

  private initFormGroup(): void {
    this.timeBoxInputForm = this.fb.group({
      task: new FormControl(),
      duration: new FormControl(),
      id: new FormControl()
    });
  }

  onSaveClick(): void {
    this.store.timeBoxActions.update(this.timeBoxInputForm.value);
    this.timeBoxInputForm.markAsPristine();
  }

  onDeleteClick(): void {
    this.store.timeBoxActions.remove(this.timeBoxInputForm.value)
  }
}
